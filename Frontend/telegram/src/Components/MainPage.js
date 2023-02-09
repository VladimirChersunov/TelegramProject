import { useState } from "react";
import { CentrColumn } from "./CentralColumn/CentrColumn";
import { AddMembers } from "./LeftColumn/AddMembers";
import { AddNewChat } from "./LeftColumn/AddNewChat";
import { AddNewMessage } from "./LeftColumn/AddNewMessage";
import { LeftColumn } from "./LeftColumn/LeftColumnMain";
import { RightColumn } from "./RightColumn/RightColumn";

export function MainPage() {
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
    },
    {
      id: 3,
      chatImage: false,
      chatName: "Команда 'Telegram'",
      shortMessage: "Було б чудово, дякую!",
      publishTime: "22:53",
      muteStatus: false,
      type: "group",
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
    },
  ]);

  const [contacts, setContacts] = useState([
   { id: 1,
    username: "Test name",
    lastSeen: "last seen 1 hours ago",
    image: "A"
  },
  { id: 2,
    username: "Test name",
    lastSeen: "last seen 2 hours ago",
    image: "B"
  },
  { id: 3,
    username: "Test name",
    lastSeen: "last seen 3 hours ago",
    image: "C"
  },
  { id: 4,
    username: "Test name",
    lastSeen: "last seen 4 hours ago",
    image: "D"
  },

  ])

  const chatType = null;
  const [addChannel, setAddChannel] = useState(false);
  const [addGroup, setAddGroup] = useState(true);
  const [addMessage, setAddMessage] = useState(false);
  const [mainLeft, setMainLeft] = useState(false);
  const [mainRiht, setMainRight] = useState(false);

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

  return (
    <div className="flex flex-row min-h-screen border-skin-border-base text-skin-base bg-skin-fill overflow-hidden">
      {addChannel && <AddMembers contacts={contacts} chatType={chatType}/>}
      {addMessage && <AddNewMessage />}
      {addGroup && <AddNewChat />}
      {mainLeft && <LeftColumn chats={chats} />}
      <CentrColumn />
     {mainRiht && <RightColumn />}
    </div>
  );
}
