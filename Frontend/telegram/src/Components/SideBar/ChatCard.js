import { useState, useRef, useEffect } from "react";
import { enterPublic } from "../../Services/chatServices";
import { ChatsContextMenu } from "./ChatsContextMenu";



export function ChatsCard({ chat, type }) {



  const contextRef = useRef();
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
    setContextMenuX(event.pageX);
    setContextMenuY(event.pageY);
  };

  const handleContactClick = async(event) => {
    setShowContextMenu(false);
  
    try{
      const data = await enterPublic(chat.chatName)
      console.log(data)
    }
    catch(error){
      console.log(error.data)
    }
    finally{
      
    }
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleClickOutside, true);
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("contextmenu", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (!contextRef?.current?.contains(e.target)) {
      setShowContextMenu(false);
    }
  };


  return (
    <div
    onContextMenu={handleContextMenu}
    onClick={()=> console.log('Кликнули на элемент!')}
     className=" w-[300px] h-[60px] m-auto  flex flex-row items-center  cursor-pointer hover:bg-skin-button-accent-hover pl-2 rounded-[4px] border-b border-skin-border-base dark:border-skin-border-inverted">
      {chat?.chatImage ? (
        <img src={chat.chatImage} alt="logo" className="rounded-full  h-[50px] w-[50px]" />
      ) : (
        <div className="rounded-full   h-[40px] w-[40px] bg-purple-500 flex items-center justify-center">
          <p className="text-xl">{chat?.chatName[0].toUpperCase() + chat?.chatName[1].toUpperCase()}</p>
        </div>
      )}
 {showContextMenu && (
        <ChatsContextMenu
          x={contextMenuX}
          y={contextMenuY}
          type={type}
          chat={chat}
        />
      )}

      <div className="flex flex-col">
      <p className="text-xl ml-2">{chat?.chatName}</p>
      <span className="ml-2 text-xs">{chat.shortMessage.slice(0, 20)}</span>
      </div>
      
      
    </div>
  );
}
