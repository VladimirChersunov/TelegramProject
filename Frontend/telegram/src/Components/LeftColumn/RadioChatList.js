import { RadioElement } from "./RadioElement";
import { useState } from "react";

export function RadioChatList() {
  const [chats] = useState([
    {
      id: 1,
      chatImage: true,
      chatName: "Club_arduino",
      shortMessage:
        "Видеодомофон для дома или квартиры. Система защиты и контроля доступа с видеомониторингом и фиксацией ",
      publishTime: "00:25",
      muteStatus: true,
    },
    {
      id: 2,
      chatImage: true,
      chatName: "Харьков LIVE",
      shortMessage:
        "Yasno: Цей тиждень, за прогнозами, буде холодним, тому навантаження на енергосистему збільшиться. ",
      publishTime: "00:34",
      muteStatus: false,
    },
    {
      id: 3,
      chatImage: false,
      chatName: "Команда 'Telegram'",
      shortMessage: "Було б чудово, дякую!",
      publishTime: "22:53",
      muteStatus: false,
    },
    {
      id: 4,
      chatImage: true,
      chatName: "Art Bondar",
      shortMessage:
        "Артём, или дай возможность тебя добавить в группу, или создай сам и добавь нас с Виталиком",
      publishTime: "19:44",
      muteStatus: true,
    },
  ]);

  return (
    <div className="flex min-h-screen w-full items-top justify-center">
      <div className="w-[100%]" x-data="app">
        {chats.map((chat) => (
          <RadioElement chat={chat} key={chat.id} />
        ))}
      </div>
    </div>
  );
}
