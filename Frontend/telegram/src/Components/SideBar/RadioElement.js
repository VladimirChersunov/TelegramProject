import { useState, useRef, useEffect } from "react";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";
import moment from "moment";
import "moment/locale/ru";
import { ChatListContextMenu } from "./ChatListContextMenu";
import { useTranslation } from "react-i18next";

export function RadioElement({
  chat,
  currentChat,
  handleMuted,
  clearMain,
  currentUser,
  visibleModalReport,
  visibleSide,
  visibleMain,
  isSmallWidth,
}) {
  const contextRef = useRef();
  const [savedMessageState, setSavedMessageState] = useState(false);
  const [chatMuteStatus, setChatMuteStatus] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [shortMessageText, setShortMessageText] = useState('');
  const MAX_LENGTH = 15;
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();
  const whoMuted = chat?.whoMuted;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
    setContextMenuX(event.pageX);
    setContextMenuY(event.pageY);
  };

  const handleOptionSelect = (event) => {
    setShowContextMenu(false);
  };

  const handleChatClick = (event) => {
    setShowContextMenu(false);
    currentChat(chat);
    if (isSmallWidth) {
      visibleSide(false);
      visibleMain(true);
    }
  };

  useEffect(() => {
    if (chat.type === "Favorite") {
      setSavedMessageState(true);
    } else {
      setSavedMessageState(false);
    }

    if (whoMuted.includes(currentUser.id)) {
      setChatMuteStatus(true);
    } else {
      setChatMuteStatus(false);
    }

    document.addEventListener("contextmenu", handleClickOutside, true);
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("contextmenu", handleClickOutside, true);
    };
  }, [chat?.type, chat?.whoMuted, currentUser.id, whoMuted]);

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
    sameDay: `[${t("mainPage.todayAt")}] HH:mm`,
    lastDay: `[${t("mainPage.yesterdayAt")}] HH:mm`,
    lastWeek: "DD.MM.YYYY",
    sameElse: "DD.MM.YYYY",
  });
//console.log(chat)
useEffect(() => {
  if(chat?.shortMsg?.username){
    setShortMessageText(chat?.shortMsg?.username + ": " + chat?.shortMsg?.message) 
  }else{
    setShortMessageText(chat?.shortMsg?.message) 
  }
}, [chat?.shortMsg?.username, chat?.shortMsg?.message]);


  
  return (
    <div className=" w-[330px] sm:w-[95%] ml-2   ">
      <input type="radio" name="option" id={chat?.id} className="peer hidden" />
      <label
        ref={contextRef}
        htmlFor={chat.id}
        onContextMenu={handleContextMenu}
        onChange={handleOptionSelect}
        onClick={handleChatClick}
        className="flex hover:bg-skin-button-accent-hover  flex-row cursor-pointer select-none 
       border-b p-2  peer-checked:bg-skin-button-accent-hover 
           border-skin-border-base dark:border-skin-border-inverted "
      >
        {showContextMenu && (
          <ChatListContextMenu
            visibleModalReport={visibleModalReport}
            x={contextMenuX}
            y={contextMenuY}
            chat={chat}
            handleMuted={handleMuted}
            clearMain={clearMain}
            currentUser={currentUser}
          />
        )}

        <div className="flex items-center justify-center">
          {chat?.chatImage ? (
            <img
              src={chat?.chatImage}
              alt="logo"
              className="rounded-full  h-[50px] w-[50px]"
            />
          ) : (
            <div className="rounded-full  h-[50px] w-[50px] bg-purple-500 flex items-center justify-center">
              <div>
                <p className="text-xl">
                  {chat?.chatName?.slice(0, 2).toUpperCase()}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col ml-2  w-[85%] mt-1 ">
          <div className="flex items-center justify-end">
            <time className="mr-1 text-xs opacity-50 ">
              {publishTimeFormatted}
            </time>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
              <p className="text-lg mr-2">{formattedChatName(chat)}</p>
              {!savedMessageState && (
                <div>{chatMuteStatus ? <VolumeOnIcon /> : ""}</div>
              )}
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <p className="text-[14px]">{shortMessageText?.substring(0, 25)}</p>

            {!savedMessageState && chat?.notViewedCounter > 0 && (
              <label
                className="rounded-full flex items-center justify-center border border-skin-border-base
                    dark:border-skin-border-inverted text-xs h-5 w-5"
              >
                {chat?.notViewedCounter}
              </label>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}
