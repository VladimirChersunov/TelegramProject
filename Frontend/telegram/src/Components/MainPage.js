import { useState, useEffect } from "react";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { ClearContainer } from "./MessageContainer/ClearContainer";
import { CollumnContainer } from "./SideBar/CollumnContainer";
import { InfoContainer } from "./InfoContainer/InfoContainer";
import { useNavigate } from "react-router-dom";
import { getUserById, updateInfo } from "../Services/userServices";
import { userLogout } from "../Services/userLogout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MessageForToast } from "./MessageContainer/MessageForToast";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export function MainPage({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [contacts, setContacts] = useState([]);
  const [mainRiht, setMainRight] = useState(false);
  const [currChat, setCurrentChat] = useState({});
  const [centrVisible, setCentrVisible] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
  const [chats, setChats] = useState([]);
  const [patternIndex, setPatterIndex] = useState(
    localStorage.getItem("imageIndex") || 15
  );
  const [lastMessage, setLastMessage] = useState(null);
  const location = useLocation();
  const [isSide, setIsSide] = useState(true);
  const [isMain, setIsMain] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [isSmallWidth, setIsSmallWidth] = useState(false);
  const currentLanguage =
    location.state?.language || localStorage.getItem("language");

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [i18n, currentLanguage]);

  //отключаем кнопку назад
  useEffect(() => {
    const handleBackButton = () => {
      navigate("/main", { language: currentLanguage });
    };
    window.addEventListener("popstate", handleBackButton);

    function handleResize() {
      setWidth(window.innerWidth);
     
    }

    window.addEventListener('resize', handleResize);

  

    return () => {
      window.removeEventListener('resize', handleResize);
    };

   
  }, []);

  useEffect(() => {
    if(window.innerWidth<1016){
      setIsSmallWidth(true)
      if(isSide){       
        setIsMain(false)
      }else{
        setIsMain(true)
      }
     
     
      console.log('SmallWidth')
    }else{
      setIsMain(true)
      setIsSide(true)
      setIsSmallWidth(false)
      console.log('BigWidth')
    }
  }, [isSmallWidth, isMain, isSide, window.innerWidth]);

 

  useEffect(() => {
    if (darkMode) {
      changeThemes("");
    } else {
      changeThemes(theme || localStorage.getItem("theme"));
    }
  }, [theme]);

  useEffect(() => {
    if (currChat.chatName) {
      document.title = `${currChat.chatName}`;
    } else {
      document.title = `Cryptic`;
    }
  }, [currChat]);

  const startToast = async (chats) => {
    //копируем массив, чтобы не триггерить useEffect
    const arraySort = [...chats];
    // определяем последнее измененное сообщение
    // сортируем массив чатов по publishTime в порядке убывания
    const sortedChats = arraySort.sort(
      (a, b) => new Date(b?.publishTime) - new Date(a?.publishTime)
    );

    // получаем первый чат в отсортированном массиве
    const latestChat = sortedChats[0];

    const autor = await getUserById(latestChat?.shortMsg?.userId);
    const isCurrent = currentUser?.id === latestChat?.shortMsg?.userId;

    if (latestChat?.whoMuted?.includes(currentUser?.id)) {
      if (!isCurrent) {
        // получаем короткое сообщение из последнего чата
        const latestMessage = latestChat?.shortMsg;

        if (latestMessage?.message !== lastMessage?.message) {
          console.log(latestMessage?.message);
          console.log(lastMessage);
          setLastMessage((prev) => latestMessage);
          toast(<MessageForToast message={latestMessage} user={autor} />, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    }
  };

  //обновление данных
  useEffect(() => {
    const getData = async () => {
      try {
        const logout = await userLogout();
        if (logout) {
          navigate("/signin", { language: currentLanguage });
        }
        const startTime = performance.now();

        const data = await updateInfo();

        const chatEqual = JSON.stringify(chats) === JSON.stringify(data.chats);

        const currentUserEqual =
          JSON.stringify(currentUser) === JSON.stringify(data.user);

        const contactEqual =
          JSON.stringify(contacts) === JSON.stringify(data.contacts);

        if (!currentUserEqual) {
          setCurrentUser(data.user);
        }

        if (!contactEqual) {
          setContacts(data.contacts);
        }

        if (!chatEqual) {
          setChats(data.chats);
        }
//console.log(data.chats)
        setCurrentUser(data.user);

        const endTime = performance.now();
        const responseTime = Math.floor(endTime - startTime); // вычисляем время ответа сервера в миллисекундах
        console.log(`Response time: ${responseTime}ms`);
      } catch (error) {
        console.log(error);
      }
    };
    // Получать данные с сервера каждую секунды
    const intervalId = setInterval(() => {
      getData();
    }, 1000);

    // Очищать интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [chats, contacts, currentUser]);

  useEffect(() => {
    startToast(chats);
  }, [chats]);

  //следим за значением из колбэкб включаем отображение главное окно чата, если выбрали в списке чат
  useEffect(() => {
    if (currChat?.id >= 0) {
      setCentrVisible(true);
    } else {
      setCentrVisible(false);
    }
  }, [currChat]);

  const clearMain = (props) => {
    setCentrVisible(props);
  };

  const changeThemes = (props) => {
    setTheme(props);
  };

  const currentChat = (chat) => {
    setCurrentChat(chat);
    console.log(chat);
  };

  const toggleRightColumn = (state) => {
    setMainRight(state);
  };

  const changePatternBackground = (index) => {
    setPatterIndex(index);
  };

  const visibleSide = (props) => {
    setIsSide(props);
    console.log(props)
  };

  const visibleMain = (props) => {
    setIsMain(props)
  };

  

  return (
    <div
      className={`${theme} sm:w-screen dark:bg-skin-fill-inverted  min-h-screen dark:text-skin-inverted dark:border-skin-border-inverted
      text-skin-base border-skin-border-base bg-skin-fill overflow-hidden font-montserrat flex md:relative sm:relative`}
    >
      {isSide && (
        <div className="w-[350px] sm:w-screen">
          <CollumnContainer
            changePatternBackground={changePatternBackground}
            currentUser={currentUser}
            chats={chats}
            currentChat={currentChat}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            contacts={contacts}
            clearMain={clearMain}
            changeThemes={changeThemes}
            visibleSide={visibleSide}
            visibleMain={visibleMain}
            isSmallWidth={isSmallWidth}
          />
        </div>
      )}

      {isMain && (
        <div className="flex-grow w-full sm:w-screen">
          {centrVisible && (
            <MessageContainer
              patternIndex={patternIndex}
              clearMain={clearMain}
              currentChat={currentChat}
              chat={currChat}
              chats={chats}
              toggleRightColumn={toggleRightColumn}
              darkMode={darkMode}
              currentUser={currentUser}
              visibleSide={visibleSide}
              visibleMain={visibleMain}
              isSmallWidth={isSmallWidth}
            />
          )}
          {!centrVisible && <ClearContainer patternIndex={patternIndex} />}
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        containerId="custom"
      />

      {mainRiht && (
        <div className="w-[350px] sm:w-[280px] sm:right-0  md:absolute sm:absolute z-50 bg-skin-fill dark:bg-skin-fill-inverted">
          <InfoContainer
            toggleRightColumn={toggleRightColumn}
            chat={currChat}
          />
        </div>
      )}
    </div>
  );
}
