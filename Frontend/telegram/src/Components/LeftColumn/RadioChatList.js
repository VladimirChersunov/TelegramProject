import { RadioElement } from "./RadioElement";
import { useState } from "react";


export function RadioChatList() {



 

    const [chats, setChats] = useState([
        {
          id: 1,
          chatImage: true,
          chatName: "Club_arduino",
          shortMessage: "Abra kadavra, kary mary, eli beli",
          publishTime: "00:00",
          muteStatus: true,
        },
        {
          id: 2,
          chatImage: true,
          chatName: "Харьков LIVE",
          shortMessage: "Abra kadavra",
          publishTime: "00:00",
          muteStatus: false,
        },
        {
          id: 3,
          chatImage: false,
          chatName: "Команда 'Telegram'",
          shortMessage: "Abra kadavra",
          publishTime: "00:00",
          muteStatus: false,
        },
        {
          id: 4,
          chatImage: true,
          chatName: "Art Bondar",
          shortMessage: "Abra kadavra",
          publishTime: "00:00",
          muteStatus: true,
        },
      ]);
    
  return (
    <div className="flex min-h-screen w-full items-top justify-center">
      <div
        className="w-[100%]"
        x-data="app"
      >
    
   
     {chats.map((chat) => (
      
        <RadioElement chat={chat} key={chat.id} />
      ))}
       
      </div>
    </div>
  );
}
