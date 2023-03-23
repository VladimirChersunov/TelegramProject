import { useState, useEffect } from "react";
import { MessageContainer } from "./MessageContainer/MessageContainer";
import { ClearContainer } from "./MessageContainer/ClearContainer";
import { CollumnContainer } from "./SideBar/CollumnContainer";
import { InfoContainer } from "./InfoContainer/InfoContainer";
import { useNavigate } from "react-router-dom";
import { updateInfo } from "../Services/userServices";

export function MainPage(props) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleBackButton = (event) => {
      navigate("/main");
    };
    window.addEventListener("popstate", handleBackButton);
    const getData = async () => {
      try {
        setIsLoading(true);
        const startTime = performance.now();
        const data = await updateInfo();
        const endTime = performance.now();
        setCurrentUser(data.user);
        const responseTime = Math.floor(endTime - startTime); // вычисляем время ответа сервера в миллисекундах
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
    }, 3000);

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

  const contact = {
    id: 1,
    username: "Test name",
    lastSeen: "last seen 1 hours ago",
    image: "A",
  };

  const [chats, setChats] = useState([
    {
      id: 0,
      chatImage: false,
      chatName: "Saved Messages",
      shortMessage:
        "Видеодомофон для дома или квартиры. Система защиты и контроля доступа с видеомониторингом и фиксацией ",
      publishTime: "00:25",
      muteStatus: null,
      type: null,
      members: null,
      messages: messages,
      pinned: messages[2],
      author: contact,
      chatInfo: null,
    },
    {
      id: 1,
      chatImage: true,
      chatName: "Club_arduino",
      shortMessage:
        "Видеодомофон для дома или квартиры. Система защиты и контроля доступа с видеомониторингом и фиксацией ",
      publishTime: "00:25",
      muteStatus: true,
      type: "channel",
      members: 32654,
      messages: messages,
      pinned: null,
      author: contact,
      chatInfo: "Denis Geek Club_arduino official",
    },
    {
      id: 2,
      chatImage: true,
      chatName: "Харьков LIVE",
      shortMessage:
        "Yasno: Цей тиждень, за прогнозами, буде холодним, тому навантаження на енергосистему збільшиться. ",
      publishTime: "00:34",
      muteStatus: false,
      type: "channel",
      members: 72364,
      messages: messages,
      pinned: null,
      author: contact,
      chatInfo:
        "Контент ежедневно с 2013 года  🔹Ссылка на канал - https://t.me/+8Rah-lb7Q6Y2MjQy    🔹Связь с админом (размещение рекламы, сообщить новость) - @macuse      ",
    },
    {
      id: 3,
      chatImage: false,
      chatName: "Команда 'Telegram'",
      shortMessage: "Було б чудово, дякую!",
      publishTime: "22:53",
      muteStatus: false,
      type: "group",
      members: 12,
      messages: messages,
      pinned: messages[1],
      author: contact,
      chatInfo: "Это официальный чат IT-step",
    },
    {
      id: 4,
      chatImage: true,
      chatName: "Art Bondar",
      shortMessage:
        "Артём, или дай возможность тебя добавить в группу, или создай сам и добавь нас с Виталиком",
      publishTime: "19:44",
      muteStatus: true,
      type: "chat",
      members: null,
      messages: messages,
      pinned: null,
      author: contact,
      chatInfo: null,
    },
  ]);

  const [contacts, setContacts] = useState([
    {
      id: 1,
      username: "Test name",
      lastSeen: "last seen 1 hours ago",
      image: "A",
    },
    {
      id: 2,
      username: "Test name",
      lastSeen: "last seen 2 hours ago",
      image: "B",
    },
    {
      id: 3,
      username: "Test name",
      lastSeen: "last seen 3 hours ago",
      image: "C",
    },
    {
      id: 4,
      username: "Test name",
      lastSeen: "last seen 4 hours ago",
      image: "D",
    },
  ]);

  const [mainRiht, setMainRight] = useState(false);
  const [currChat, setCurrentChat] = useState({});
  const [centrVisible, setCentrVisible] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (currChat.id >= 0) {
      setCentrVisible(true);
    } else {
      setCentrVisible(false);
    }
  }, [currChat]);

  const handleMuted = (props) => {
    setChats(
      chats.map((chat, id) =>
        id === props.chat.id ? { ...chat, muteStatus: true } : chat
      )
    );
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
