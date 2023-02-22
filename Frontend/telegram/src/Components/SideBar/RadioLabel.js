import art from "./../../Assets/art.jpg";
import live from "./../../Assets/live.jpg";
import arduino from "./../../Assets/arduino.jpg";
import { useState, useRef, useEffect } from "react";
import { ContextMenu } from "./RightContextOnChat";
import { VolumeMuteIcon } from "../Icons/VolumeMuteIcon";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";


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
  
    document.addEventListener('contextmenu', handleClickOutside,true);
    document.addEventListener("click", handleClickOutside, true);
   
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener('contextmenu', handleClickOutside,true);
     
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
      className="flex hover:bg-skin-button-accent-hover  flex-row cursor-pointer select-none 
       border-b p-2 peer-checked:bg-skin-button-accent-hover peer-checked:bg-[#6a37d8]
           border-skin-border-base dark:border-skin-border-inverted"
    >
     {showContextMenu && (
            <ContextMenu x={contextMenuX} y={contextMenuY}>
              <div onClick={() => alert(`Copy `)}>Open in new tab</div>
              <div onClick={() => alert(`Paste `)}>Mark as read</div>
              <div onClick={() => alert(`Paste `)}>Mute</div>
              <div onClick={() => alert(`Paste `)}>Unmute</div>
              <div onClick={() => alert(`Paste `)}>Report</div>
              <div onClick={() => alert(`Paste `)}>Delete and exit</div>
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
          <div className="flex flex-row items-center">
            <p className="text-lg mr-2">{chat.chatName}</p>
            {chat.muteStatus ? (
             <VolumeMuteIcon/>
            ) : (
             <VolumeOnIcon/>
            )}
          </div>

          <div className="">
            <time className="mr-1 text-xs opacity-50">{chat.publishTime}</time>
          </div>
        </div>

        <div
        className="flex flex-row justify-between">
          <p className="">{chat.shortMessage.substring(0, 25)}</p>
          <label className="rounded-full text-center border border-skin-border-base
           dark:border-skin-border-inverted
          text-xs h-5 w-5">20</label>
        </div>
      </div>
    </label>
  );
}
