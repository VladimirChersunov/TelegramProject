
import art from "./../../Assets/art.jpg";
import live from "./../../Assets/live.jpg";
import arduino from "./../../Assets/arduino.jpg";
import { useState, useRef, useEffect } from "react";
import { ContextMenu } from "./RightContextOnChat";
import { VolumeMuteIcon } from "../Icons/VolumeMuteIcon";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";
import { SavedIcon } from "../Icons/SavedIcon";


export function RadioElement({chat, currentChat, handleMuted}) {
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
  const contextRef = useRef();
  const [savedMessageState, setSavedMessageState] = useState(false);
  const [chatMuteStatus, setChatMuteStatus] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [unseenCount, setUnseenCount] = useState(0);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
    setContextMenuX(event.pageX);
    setContextMenuY(event.pageY);
  };

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
    setShowContextMenu(false);
  };

  const handleChatClick = (event) => {
    setShowContextMenu(false);
    currentChat(chat);
  };


 

  useEffect(() => {
    if (chat.id === 0) {
      setSavedMessageState(true);
    } else {
      setSavedMessageState(false);
    }

    chat.messages.map((message, id) => {
      if (message.seenTime === null) {
        setUnseenCount((prev) => unseenCount + 1);
      }      
    }); 

    setChatMuteStatus((prevStatus) => chat.muteStatus);

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
    <div className=" w-[97%] m-auto   ">
    <input
      type="radio"
      name="option"
      id={chat.id}
      className="peer hidden"
    />
     <label
      ref={contextRef}
      htmlFor={chat.id}
      onContextMenu={handleContextMenu}
      onChange={handleOptionSelect}
      onClick={handleChatClick}
      className="flex hover:bg-skin-button-accent-hover  flex-row cursor-pointer select-none 
       border-b p-2 peer-checked:bg-skin-button-accent-hover peer-checked:bg-[#6a37d8]
           border-skin-border-base dark:border-skin-border-inverted"
    >
      {showContextMenu && <ContextMenu x={contextMenuX} y={contextMenuY} chat={chat} handleMuted={handleMuted}/>}

      <div>
        {chat.chatImage ? (
          <img
            src={image}
            alt="logo"
            className="rounded-full  h-[50px] w-[50px]"
          />
        ) : (
          <div className="rounded-full   h-[50px] w-[50px] bg-purple-500 flex items-center justify-center">
            {!savedMessageState && <p className="text-3xl">T</p>}
            {savedMessageState && <SavedIcon />}
          </div>
        )}
      </div>

      <div className="flex flex-col ml-2  w-[85%] mt-1 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <p className="text-lg mr-2">{chat.chatName}</p>
            {!savedMessageState && (
              <div>
                {chatMuteStatus ? <VolumeMuteIcon /> : <VolumeOnIcon />}
              </div>
            )}
          </div>

          <div className="">
            <time className="mr-1 text-xs opacity-50">{chat.publishTime}</time>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <p className="">{chat.shortMessage.substring(0, 25)}</p>
         {!savedMessageState&& <label
            className="rounded-full text-center border border-skin-border-base
           dark:border-skin-border-inverted
          text-xs h-5 w-5"
          >
            {unseenCount}
          </label>}
        </div>
      </div>
    </label>
  </div>
  
  );

 
}
