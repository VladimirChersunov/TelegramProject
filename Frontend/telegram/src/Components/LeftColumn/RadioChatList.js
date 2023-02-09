import { RadioElement } from "./RadioElement";
import { useState} from "react";
import { ChatCreateButton } from "./ChatCreateButton";

export function RadioChatList({chats}) {
  const [open, setOpen] = useState(false); 
  return (
    <div className="flex min-h-screen w-full flex-col items-top justify-center">
      <div className="w-[100%] h-[85%]" x-data="app">
        {chats.map((chat) => (
          <RadioElement  chat={chat} key={chat.id} />
        ))}
      </div>
      <div className="h-[15%] w-[100%] bg-opacity-0 ">
        {/* <button className="w-[50px] h-[50px] rounded-full bg-blue-300
         ml-[80%] hover:bg-blue-500 hover:border hover:border-black">&#128394;</button> */}
         <ChatCreateButton/>
        </div>
    </div>
  );
}
