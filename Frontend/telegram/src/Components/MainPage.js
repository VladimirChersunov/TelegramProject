import { useState, useEffect } from "react";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { ClearContainer } from "./MessageContainer/ClearContainer";
import { CollumnContainer } from "./SideBar/CollumnContainer";
import { InfoContainer } from "./InfoContainer/InfoContainer";
import { useNavigate } from "react-router-dom";
import { updateInfo } from "../Services/userServices";
import { userLogout } from "../Services/userLogout";

export function MainPage(props) {
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

  useEffect(() => {
    const handleBackButton = (event) => {
      navigate("/main");
    };
    window.addEventListener("popstate", handleBackButton);
    const getData = async () => {
      try {
        setIsLoading(true);
        const logout = await userLogout();
        if (logout) {
          navigate("/signin");
        }
        //const startTime = performance.now();
        const data = await updateInfo();
        //const endTime = performance.now();

        //console.log(data.chats);
        setChats(data.chats)
        setContacts(data.contacts)
        setCurrentUser(data.user);
        //const responseTime = Math.floor(endTime - startTime); // вычисляем время ответа сервера в миллисекундах
        //console.log(`Response time: ${responseTime}ms`);
      } catch {
        console.log("error");
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    // Получать данные с сервера каждые 3 секунды
    const intervalId = setInterval(() => {
      getData();
    }, 1000);

    // Очищать интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const messages = [
    {
      id: 1,
      username: "Admin",
      data: "Text",
      sendTime: "00:00",
      deilveryStatus: true,
      seenTime: null,
    },
    {
      id: 2,
      username: "User",
      data: "Text",
      sendTime: "00:00",
      deilveryStatus: true,
      seenTime: null,
    },
    {
      id: 3,
      username: "Admin",
      data: "Text",
      sendTime: "00:00",
      deilveryStatus: true,
      seenTime: "12:36",
    },
    {
      id: 4,
      username: "User",
      data: "Text",
      sendTime: "00:00",
      deilveryStatus: true,
      seenTime: "12:36",
    },
  ];

 

  

  useEffect(() => {
    if (currChat.id >= 0) {
      setCentrVisible(true);
    } else {
      setCentrVisible(false);
    }
  }, [currChat]);

  const handleMuted = (props) => {
    // setChats(
    //   chats.map((chat, id) =>
    //     id === props.chat.id ? { ...chat, muteStatus: true } : chat
    //   )
    // );
  };

  const changeThemes = (props) => {
    setTheme((prevTheme) => props);
  };

  const currentChat = (chat) => {
    setCurrentChat(chat);
  };

  const toggleRightColumn = (state) => {
    setMainRight(state);
  };

  return (
    <div
      className={`${theme} dark:bg-skin-fill-inverted flex flex-row min-h-screen dark:text-skin-inverted dark:border-skin-border-inverted
      text-skin-base border-skin-border-base bg-skin-fill overflow-hidden font-montserrat`}
    >
      <CollumnContainer
        currentUser={currentUser}
        chats={chats}
        currentChat={currentChat}
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
        handleMuted={handleMuted}
        contacts={contacts}
      />

      {centrVisible && (
        <MessageContainer
          chat={currChat}
          toggleRightColumn={toggleRightColumn}
          changeThemes={changeThemes}
          darkMode={props.darkMode}
        />
      )}
      {mainRiht && (
        <InfoContainer toggleRightColumn={toggleRightColumn} chat={currChat} />
      )}
      {!centrVisible && <ClearContainer />}
    </div>
  );
}
