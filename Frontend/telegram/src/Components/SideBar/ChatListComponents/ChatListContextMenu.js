import { useState, useEffect, useRef } from "react";
import { FlagIcon } from "../../Icons/FlagIcon";
import { NewTab } from "../../Icons/NewTab";
import { RecicleIcon } from "../../Icons/RecicleIcon";
import { VolumeMuteIcon } from "../../Icons/VolumeMuteIcon";
import { VolumeOnIcon } from "../../Icons/VolumeOnIcon";
import {
  chatNotifications,
  deleteChatById,
  leavePublic,
} from "../../../Services/chatServices";
import { readMessaages } from "../../../Services/messageServices";
import { SelectAll } from "../../Icons/SelectAll";
import { useTranslation } from "react-i18next";

export function ChatListContextMenu({
  chat,
  x,
  y,
  clearMain,
  currentUser,
  visibleModalReport,
}) {
  const menuRef = useRef(null);
  const [chats, setChat] = useState(false);
  const [group, setGroup] = useState(false);
  const [channel, setChannel] = useState(false);  
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();
  const whoMuted = chat?.whoMuted;
  const [chatMuteStatus, setChatMuteStatus] = useState(false);

  useEffect(() => {
    if (whoMuted.includes(currentUser.id)) {
      setChatMuteStatus((prev) => true);
    } else {
      setChatMuteStatus((prev) => false);
    }
  }, [chat?.whoMuted]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  useEffect(() => {
    const parentRect = menuRef.current.parentNode.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    let correctedX = x;
    let correctedY = y;

    if (menuRect.right > parentRect.right) {
      correctedX -= menuRect.right - parentRect.right;
    }

    if (menuRect.bottom > parentRect.bottom) {
      correctedY -= menuRect.bottom - parentRect.bottom;
    }

    menuRef.current.style.left = `${correctedX}px`;

    if (correctedY < 0) {
      correctedY = 1;
    }

    if (window.innerHeight - correctedY < 200) {
      correctedY = window.innerHeight - 200;
    }

    menuRef.current.style.top = `${correctedY}px`;
  }, [x, y]);

  useEffect(() => {
    if (chat.type === "Private") {
      setChat(true);
      setGroup(false);
      setChannel(false);
    }
    if (chat.type === "Group") {
      setChat(false);
      setGroup(true);
      setChannel(false);
    }
    if (chat.type === "Channel") {
      setChat(false);
      setGroup(false);
      setChannel(true);
    }
  }, [chat.type]);

  

  const leaveChat = async () => {
    const responce = await leavePublic(chat?.chatName);
    clearMain(false);
    console.log(responce);
  };

  const deleteChat = async () => {
    const responce = await deleteChatById(chat?.id);
    clearMain(false);
    console.log(responce);
  };

  const muteChat = async () => {
    const responce = await chatNotifications(chat?.id);
    console.log(responce.result);
  };

  const handleMuteChat = (event) => {
    event.stopPropagation();
    muteChat();
  };

  const handleLeaveChat = (event) => {
    event.stopPropagation();
    leaveChat();
  };

  const handleDeleteChat = (event) => {
    event.stopPropagation();
    deleteChat();
  };

  const markRead = async () => {
    const responce = await readMessaages(chat?.id, currentUser?.id);
    console.log(responce);
  };

  const handleMarkRead = (event) => {
    event.stopPropagation();
    markRead();
  };

  const handleOpenNewTab = () => {
    window.open(`http://localhost:3000/main`, "_blank");
  };

  

  return (
    <div
   
      ref={menuRef}
      className="w-[185px] h-max text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg ">
        <li
          onClick={handleOpenNewTab}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <NewTab />
          <p className="font-bold ml-2">{t("mainPage.openInNewTab")}</p>
        </li>
        <div className="h-[1px] bg-skin-fill-inverted dark:bg-skin-fill w-[80%] m-auto " />
        <li
          onClick={handleMarkRead}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <SelectAll />
          <p className="font-bold ml-2"> {t("mainPage.markRead")}</p>
        </li>
        {chatMuteStatus && (
          <li
            onClick={handleMuteChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
          >
            <VolumeMuteIcon />
            <p className="font-bold ml-2"> {t("mainPage.mute")}</p>
          </li>
        )}
        {!chatMuteStatus && (
          <li
            onClick={handleMuteChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
          >
            <VolumeOnIcon />
            <p className="font-bold ml-2"> {t("mainPage.unmute")}</p>
          </li>
        )}
        <li
          onClick={(event) => {
            event.stopPropagation();

            visibleModalReport(true);
          }}
          className="   pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2 hover:cursor-pointer hover:bg-skin-button-accent-hover"
        >
          <FlagIcon />
          <p className="font-bold ml-2 "> {t("mainPage.report")}</p>
        </li>
        {channel && (
          <li
            onClick={handleLeaveChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2"
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
            <p className="font-bold ml-2"> {t("mainPage.leaveChannel")}</p>
          </li>
        )}
        {group && (
          <li
            onClick={handleLeaveChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
          flex-row text-skin-error  items-center text-sm pt-2 pb-2"
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
            <p className="font-bold ml-2"> {t("mainPage.deleteAndExit")}</p>
          </li>
        )}
        {chats && (
          <li
            onClick={handleDeleteChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2 "
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
            <p className="font-bold ml-2">{t("mainPage.delete")}</p>
          </li>
        )}
      </ul>
    </div>
  );
}
