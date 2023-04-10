import { useState, useEffect } from "react";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { ClearContainer } from "./MessageContainer/ClearContainer";
import { CollumnContainer } from "./SideBar/CollumnContainer";
import { InfoContainer } from "./InfoContainer/InfoContainer";
import { useNavigate } from "react-router-dom";
import { getUserById, updateInfo } from "../Services/userServices";
import { userLogout } from "../Services/userLogout";
import isEqual from "lodash/isEqual";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MessageForToast } from "./MessageContainer/MessageForToast";

export function MainPage({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [contacts, setContacts] = useState([]);
  const [mainRiht, setMainRight] = useState(false);
  const [currChat, setCurrentChat] = useState({});
  const [centrVisible, setCentrVisible] = useState(false);
  const [theme, setTheme] = useState("");
  const [chats, setChats] = useState([]);
  const [bigData, setBigData] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);

  //отключаем кнопку назад
  useEffect(() => {
    const handleBackButton = () => {
      navigate("/main");
    };
    window.addEventListener("popstate", handleBackButton);
  }, []);

  useEffect(() => {
    if (currChat.chatName) {
      document.title = `${currChat.chatName}`;
    } else {
      document.title = `Cryptic`;
    }
  }, [currChat]);

  const startToast = async (chats) => {
    // определяем последнее измененное сообщение
    // сортируем массив чатов по publishTime в порядке убывания
    const arraySort = [...chats];

    const sortedChats = arraySort.sort(
      (a, b) => new Date(b?.publishTime) - new Date(a?.publishTime)
    );

    // получаем первый чат в отсортированном массиве
    const latestChat = sortedChats[0];

    const autor = await getUserById(latestChat?.shortMsg?.userId);
    const isCurrent = currentUser.id === latestChat?.shortMsg?.userId;
    console.log(isCurrent);
    if (latestChat.muteStatus) {
      if (!isCurrent) {
        // получаем короткое сообщение из последнего чата
        const latestMessage = latestChat?.shortMsg;

        if (latestMessage && latestMessage !== lastMessage) {
          setLastMessage(latestMessage);
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
          navigate("/signin");
        }
        // const startTime = performance.now();

        const data = await updateInfo();

        const chatEqual = isEqual(
          JSON.stringify(chats),
          JSON.stringify(data.chats)
        );
        const contactEqual = isEqual(
          JSON.stringify(contacts),
          JSON.stringify(data.contacts)
        );

        if (!chatEqual || !contactEqual) {
          console.log("refresh");
          setBigData(data);
          setChats(data.chats);
          setContacts(data.contacts);
          setCurrentUser(data.user);
          startToast(data.chats);
        }

        setCurrentUser(data.user);

        // const endTime = performance.now();
        // const responseTime = Math.floor(endTime - startTime); // вычисляем время ответа сервера в миллисекундах
        // console.log(`Response time: ${responseTime}ms`);
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
  }, [bigData, chats, contacts]);

  useEffect(() => {
    if (currChat?.id >= 0) {
      setCentrVisible(true);
    } else {
      setCentrVisible(false);
    }
  }, [currChat]);

  const handleMuted = (props) => {};

  const clearMain = (props) => {
    setCentrVisible(props);
  };

  const changeThemes = (props) => {
    setTheme(props);
  };

  const currentChat = (chat) => {
    setCurrentChat(chat);
  };

  const toggleRightColumn = (state) => {
    setMainRight(state);
  };

  return (
    <div
      className={`${theme} dark:bg-skin-fill-inverted  min-h-screen dark:text-skin-inverted dark:border-skin-border-inverted
      text-skin-base border-skin-border-base bg-skin-fill overflow-hidden font-montserrat flex`}
    >
      <div className="w-[350px]">
        <CollumnContainer
          currentUser={currentUser}
          chats={chats}
          currentChat={currentChat}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          handleMuted={handleMuted}
          contacts={contacts}
          clearMain={clearMain}
        />
      </div>

      <div className="flex-grow w-full">
        {centrVisible && (
          <MessageContainer
            clearMain={clearMain}
            currentChat={currentChat}
            chat={currChat}
            chats={chats}
            toggleRightColumn={toggleRightColumn}
            changeThemes={changeThemes}
            darkMode={darkMode}
            currentUser={currentUser}
          />
        )}
        {!centrVisible && <ClearContainer />}
      </div>

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
        <div className="w-[350px]">
          <InfoContainer
            toggleRightColumn={toggleRightColumn}
            chat={currChat}
          />
        </div>
      )}
    </div>
  );
}
