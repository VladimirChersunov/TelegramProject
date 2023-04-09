import { useState,useRef,useEffect } from "react";
import { ChatCardContextMenu } from "./ChatCardContextMenu";


export function ChatsCard({ chat, currentChat }) {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const contextChatRef = useRef();

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
    setContextMenuX(event.pageX);
    setContextMenuY(event.pageY);
  };

  //клик по контакту
  const handleChatClick = async () => {
    currentChat(chat);
  };

  //закрытие меню
  const handleCloseContextMenu = () => {
    setShowContextMenu(false);
  };

   //метод для обработчика событий для отслеживания кликов снаружи
   const handleClickOutsideChat = (e) => {
    if (!contextChatRef?.current?.contains(e.target)) {
      setShowContextMenu(false);
      document.removeEventListener("click", handleClickOutsideChat, true);
      document.removeEventListener("contextmenu", handleClickOutsideChat, true);
    }
  };

   //обработчик событий для отслеживания кликов снаружи
   useEffect(() => {
    if(showContextMenu){
      document.addEventListener("contextmenu", handleClickOutsideChat, true);
      document.addEventListener("click", handleClickOutsideChat, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutsideChat, true);
      document.removeEventListener("contextmenu", handleClickOutsideChat, true);
    };
  }, [showContextMenu]);

  return (
    <div
    ref={contextChatRef}
      onContextMenu={handleContextMenu}
      onClick={handleChatClick}
      className=" w-[300px] h-[60px] m-auto  flex flex-row items-center  cursor-pointer hover:bg-skin-button-accent-hover pl-2 rounded-[4px] border-b border-skin-border-base dark:border-skin-border-inverted"
    >
      {chat?.chatImage ? (
        <img
          src={chat.chatImage}
          alt="logo"
          className="rounded-full  h-[50px] w-[50px]"
        />
      ) : (
        <div className="rounded-full   h-[40px] w-[40px] bg-purple-500 flex items-center justify-center">
          <p className="text-xl">
            {chat?.chatName[0].toUpperCase() + chat?.chatName[1].toUpperCase()}
          </p>
        </div>
      )}
      {showContextMenu && (
        <ChatCardContextMenu x={contextMenuX} y={contextMenuY}  chat={chat} handleCloseContextMenu={handleCloseContextMenu} />
      )}

      <div className="flex flex-col">
        <p className="text-xl ml-2">{chat?.chatName}</p>
        <span className="ml-2 text-xs">{chat.shortMessage.slice(0, 20)}</span>
      </div>
    </div>
  );
}
