import art from "./../../Assets/art.jpg";
import live from "./../../Assets/live.jpg";
import arduino from "./../../Assets/arduino.jpg";
import { useState, useRef, useEffect } from "react";
import { ContextMenu } from "./RightContextOnChat";


export function RadioLabel({ chat, currentChat }) {
  let image;
  switch (chat.id) {
    case 1:
      image = arduino;
      break;
    case 2:
      image = live;
      break;
    case 4:
      image = art;
      break;
    default:
      break;
  }
  const contextRef = useRef()
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
    setContextMenuX(event.pageX);
    setContextMenuY(event.pageY);
  }

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
    setShowContextMenu(false);
  };

 

  const handleChatClick = (event) => {
    setShowContextMenu(false);
    currentChat(chat);
  };

  useEffect(() => {
    console.log("add");
    document.addEventListener('contextmenu', handleClickOutside,true);
    document.addEventListener("click", handleClickOutside, true);
   
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener('contextmenu', handleClickOutside,true);
      console.log("del");
    };
  }, []);

  const handleClickOutside = (e) => {
    if (!contextRef?.current?.contains(e.target)) {
      setShowContextMenu(false);      
    }
  };

  return (
    <label
      ref={contextRef}
      for={chat.id}
      onContextMenu={handleContextMenu}
      onChange={handleOptionSelect}
      onClick={handleChatClick}
      className="flex hover:bg-skin-button-accent-hover  flex-row cursor-pointer select-none rounded-xl
       border p-2 peer-checked:bg-skin-button-accent-hover
          peer-checked:bg-indigo-900 border-skin-border-base dark:border-[#C6BDFF]"
    >
     {showContextMenu && (
            <ContextMenu x={contextMenuX} y={contextMenuY}>
              <div onClick={() => alert(`Copy `)}>Copy</div>
              <div onClick={() => alert(`Paste `)}>Paste</div>
            </ContextMenu>
          )}
     
      <div>
        {chat.chatImage ? (
          <img
            src={image}
            alt="logo"
            className="rounded-full mr-2 h-[50px] w-[50px]"
          />
        ) : (
          <div className="rounded-full mt-[5px] ml-1 mr-2 h-[50px] w-[50px] bg-purple-500 flex
           flex-row justify-center border  text-3xl pt-1">
            <p>T</p>
          </div>
        )}
      </div>

      <div className="flex flex-col  w-[85%] mt-1 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-lg mr-2">{chat.chatName}</p>
            {chat.muteStatus ? (
              <div className="mt-1">&#128263;</div>
            ) : (
              <div className="mt-1">&#128264;</div>
            )}
          </div>

          <div className="">
            <time className="mr-1 text-xs opacity-50">{chat.publishTime}</time>
          </div>
        </div>

        <div>
          <p className="">{chat.shortMessage.substring(0, 25)}</p>
        </div>
      </div>
    </label>
  );
}
