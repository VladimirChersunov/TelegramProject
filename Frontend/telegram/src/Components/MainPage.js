import { useState, useEffect } from "react";
import { CentrColumn } from "./CentralColumn/CentrColumn";
import { ClearCentr } from "./CentralColumn/ClearCentr";
import { AddMembers } from "./LeftColumn/AddMembers";
import { AddNewChat } from "./LeftColumn/AddNewChat";
import { AddNewMessage } from "./LeftColumn/AddNewMessage";
import { LeftColumn } from "./LeftColumn/LeftColumnMain";
import { RightColumn } from "./RightColumn/RightColumn";

export const currentUser = "Admin";

export function MainPage() {
  
  const messages = [
    {
      id: 1,
      username: "Admin",
      data: "Text",
      sendTime: "00:00",
      deilveryStatus: true,
      seenTime: "12:36",
    },
    {
      id: 2,
      username: "User",
      data: "Text",
      sendTime: "00:00",
      deilveryStatus: true,
      seenTime: "12:36",
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

  const chatType = null;
  const [addChannel, setAddChannel] = useState(false);
  const [addGroup, setAddGroup] = useState(false);
  const [addMessage, setAddMessage] = useState(false);
  const [mainLeft, setMainLeft] = useState(true);
  const [mainRiht, setMainRight] = useState(false);
  const [currChat, setCurrentChat] = useState({});
  const [centrVisible, setCentrVisible] = useState(false);

  useEffect(() => {
    if (currChat.id) {
      setCentrVisible(true);
    } else {
      setCentrVisible(false);
    }
  }, [currChat]);

  const addNewMessage = () => {
    setAddMessage(true);
    setMainLeft(false);
  };

  const addNewGroup = () => {
    setMainLeft(false);
    setAddGroup(true);
  };

  const addNewChannel = () => {
    setAddChannel(true);
    setMainLeft(false);
  };

  const currentChat = (chat) => {
    setCurrentChat(chat);
  };

  const toggleRightColumn = (state) => {
    setMainRight(state);
  };

  return (
    <div className="flex flex-row min-h-screen border-skin-border-base text-skin-base bg-skin-fill overflow-hidden">
      {addChannel && <AddMembers contacts={contacts} chatType={chatType} />}
      {addMessage && <AddNewMessage />}
      {addGroup && <AddNewChat />}
      {mainLeft && <LeftColumn chats={chats} currentChat={currentChat} />}
      {centrVisible && (
        <CentrColumn chat={currChat} toggleRightColumn={toggleRightColumn} />
      )}
      {mainRiht && (
        <RightColumn toggleRightColumn={toggleRightColumn} chat={currChat} />
      )}
      {!centrVisible && <ClearCentr />}
    </div>
  );
}
