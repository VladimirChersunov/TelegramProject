import { useState, useRef, useEffect } from "react";
import { ContextMenu } from "./RightContextOnChat";
import { VolumeMuteIcon } from "../Icons/VolumeMuteIcon";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";
import moment from "moment";
import "moment/locale/ru";

export function RadioElement({ chat, currentChat, handleMuted,clearMain }) {
  const contextRef = useRef();
  const [savedMessageState, setSavedMessageState] = useState(false);
  const [chatMuteStatus, setChatMuteStatus] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); 
  const MAX_LENGTH = 15;

  //console.log(chat)

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
    if (chat.type === "Favorite") {
      setSavedMessageState(true);
    } else {
      setSavedMessageState(false);
    }

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

  //форматирование имени чата
  const formattedChatName = (chat) => {
    if (chat?.chatName?.length <= MAX_LENGTH) {
      return chat.chatName;
    } else {
      const truncatedChatName = chat?.chatName?.slice(0, MAX_LENGTH) + "...";
      return truncatedChatName;
    }
  };

  // Форматирование времени
  const publishTimeFormatted = moment(chat.publishTime).calendar(null, {
    sameDay: "[Today at] HH:mm",
    lastDay: "[Yesterday at] HH:mm",
    lastWeek: "DD.MM.YYYY",
    sameElse: "DD.MM.YYYY",
  });

  return (
    <div className=" w-[330px] ml-2   ">
      <input type="radio" name="option" id={chat.id} className="peer hidden" />
      <label
        ref={contextRef}
        htmlFor={chat.id}
        onContextMenu={handleContextMenu}
        onChange={handleOptionSelect}
        onClick={handleChatClick}
        className="flex hover:bg-skin-button-accent-hover  flex-row cursor-pointer select-none 
       border-b p-2 peer-checked:bg-skin-button-accent-hover peer-checked:bg-[#6a37d8]
           border-skin-border-base dark:border-skin-border-inverted "
      >
        {showContextMenu && (
          <ContextMenu
            x={contextMenuX}
            y={contextMenuY}
            chat={chat}
            handleMuted={handleMuted}
            clearMain={clearMain}
          />
        )}

        <div>
          {chat.chatImage  ? (
            <img
              src={chat.chatImage}
              alt="logo"
              className="rounded-full  h-[50px] w-[50px]"
            />
          ) : (
            <div className="rounded-full   h-[50px] w-[50px] bg-purple-500 flex items-center justify-center">
             
                <div>
                  <p className="text-xl">
                    {chat?.chatName?.slice(0, 2).toUpperCase()}
                  </p>
                </div>
              
            </div>
          )}
        </div>

        <div className="flex flex-col ml-2  w-[85%] mt-1 ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
              <p className="text-lg mr-2">{formattedChatName(chat)}</p>
              {!savedMessageState && (
                <div>
                  {chatMuteStatus ? <VolumeMuteIcon /> : <VolumeOnIcon />}
                </div>
              )}
            </div>

            <div className="">
              <time className="mr-1 text-xs opacity-50">
                {publishTimeFormatted}
              </time>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <p className="text-[14px]">{chat.shortMessage.substring(0, 25)}</p>

            {!savedMessageState && (
              <label
                className="rounded-full flex items-center justify-center border border-skin-border-base
                    dark:border-skin-border-inverted text-xs h-5 w-5"
              >
                {chat.notViewedCounter}
              </label>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}
