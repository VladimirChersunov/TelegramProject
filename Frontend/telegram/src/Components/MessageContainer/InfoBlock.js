import { useEffect, useState } from "react";
import { SavedIcon } from "../Icons/SavedIcon";

export function InfoBlock({ chat, toggleRightColumn }) {
  const [typeChat, setTypeChat] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (chat.type === "channel") {
      setFavorite(false)
      setTypeChat(`${chat.members} subscrybers`);
    } else if (chat.type === "group") {
      setTypeChat(`${chat.members} members`);
      setFavorite(false)
    } else if (chat.type === "Favorite") {
      setFavorite(true)
    }  else {
      setTypeChat(chat.author);    
      setFavorite(false)  
    }
  }, [chat]);

  return (
    <div
      onClick={() => {
        toggleRightColumn(true);
      }}
      className="flex flex-row hover:cursor-pointer justify-between w-1/2 "
    >
      <div className="flex  h-[100%] w-[100%] items-center pl-5 ">
      {chat.chatImage ? (
          <img
            src={chat.chatImage }
            alt="logo"
            className="h-[40px] w-[40px] select-none  rounded-full"
          />
        ) : (
          <div className="rounded-full   h-[40px] w-[40px]  bg-purple-500 flex items-center justify-center select-none">
           { favorite ? <SavedIcon/> :
            <p className="text-lg">
              {chat.chatName[0].toUpperCase() + chat.chatName[1].toUpperCase()}
            </p>}
          </div>
        )}

        <div className="flex flex-col  w-[85%] mt-1">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-lg mr-2 ml-2">{chat.chatName} </p>          
              {typeChat && <p className="text-xs"> {typeChat} </p>}              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
