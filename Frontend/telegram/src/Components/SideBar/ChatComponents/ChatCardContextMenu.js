import { RecicleIcon } from "../../Icons/RecicleIcon";
import { PeoplesIcon } from "../../Icons/PeoplesIcon";
import { enterPublic, isUserInChat, leavePublic } from "../../../Services/chatServices";
import { useEffect, useState } from "react";

export function ChatCardContextMenu({ x, y,handleCloseContextMenu, chat }) {
  const [userInChat, setUserInChat] = useState(false);

  useEffect(() => {
    const checkChat = async () => {
      const userInChatExist = await isUserInChat(chat?.id);
      setUserInChat(userInChatExist.result);
    };

    checkChat();
  }, [chat?.id]);

  const handleEnterChat = (event) => {
    event.stopPropagation();
    const enterChat = async () => {
      if (!userInChat) {
        const data = await enterPublic(chat?.chatName);
        console.log(data);
      }
    };
    enterChat();
    handleCloseContextMenu()
  };

  const handleDeleteChat = (event) => {
    event.stopPropagation();
    const leaveChat = async () => {
      if (userInChat) {
        const data = await leavePublic(chat?.chatName);
        console.log(data);
      }
    };
    leaveChat();
    handleCloseContextMenu()
  };
  //console.log(chat)
  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
     text-lg  border border-skin-border-base dark:border-skin-border-inverted 
     rounded-lg z-50"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg ">
        {!userInChat && (
          <li
            onClick={handleEnterChat}
            id="menu-item"
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
         flex-row  items-center text-sm pt-2 pb-2"
          >
            <PeoplesIcon />
            <p className="font-bold ml-2">Enter to chat</p>
          </li>
        )}

        {userInChat && (
          <li
            id="menu-item"
            onClick={handleDeleteChat}
            className="menu-item hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
         flex-row  items-center text-sm pt-2 pb-2"
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600 fill-none"} />
            <p className="font-bold ml-2 text-skin-error">Leave chat</p>
          </li>
        )}
      </ul>
    </div>
  );
}
