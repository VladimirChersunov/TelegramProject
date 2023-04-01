import { useState, useEffect } from "react";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { ClearContainer } from "./MessageContainer/ClearContainer";
import { CollumnContainer } from "./SideBar/CollumnContainer";
import { InfoContainer } from "./InfoContainer/InfoContainer";
import { useNavigate } from "react-router-dom";
import { updateInfo } from "../Services/userServices";
import { userLogout } from "../Services/userLogout";
import isEqual from "lodash/isEqual";

export function MainPage({ darkMode, userData, toggleDarkMode }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [mainRiht, setMainRight] = useState(false);
  const [currChat, setCurrentChat] = useState({});
  const [centrVisible, setCentrVisible] = useState(false);
  const [theme, setTheme] = useState("");
  const [chats, setChats] = useState([]);
  const [bigData, setBigData] = useState([]);

  useEffect(() => {
    const handleBackButton = (event) => {
      navigate("/main");
    };
    window.addEventListener("popstate", handleBackButton);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
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
          console.log("refresh")
          setBigData(data);
          setChats(data.chats);
          setContacts(data.contacts);
          setCurrentUser(data.user);
        }
        //console.log(data)
        // const endTime = performance.now();
        // const responseTime = Math.floor(endTime - startTime); // вычисляем время ответа сервера в миллисекундах
        // console.log(`Response time: ${responseTime}ms`);
      } catch {
        console.log("error");
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    // Получать данные с сервера каждую секунды
    const intervalId = setInterval(() => {
      getData();
    }, 1000);

    // Очищать интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [bigData]);

  useEffect(() => {
    if (currChat.id >= 0) {
      setCentrVisible(true);
    } else {
      setCentrVisible(false);
    }
  }, [currChat]);

  const handleMuted = (props) => {};

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
        />
      </div>

      <div className="flex-grow w-full">
        {centrVisible && (
          <MessageContainer
            chat={currChat}
            toggleRightColumn={toggleRightColumn}
            changeThemes={changeThemes}
            darkMode={darkMode}
            currentUser={currentUser}
          />
        )}
        {!centrVisible && <ClearContainer />}
      </div>

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
