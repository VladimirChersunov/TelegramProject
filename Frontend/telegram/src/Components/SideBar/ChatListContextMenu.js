import { useState, useEffect } from "react";
import { FlagIcon } from "../Icons/FlagIcon";
import { NewTab } from "../Icons/NewTab";
import { RecicleIcon } from "../Icons/RecicleIcon";
import { VolumeMuteIcon } from "../Icons/VolumeMuteIcon";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";
import {
  chatNotifications,
  deleteChatById,
  leavePublic,
} from "../../Services/chatServices";
import { readMessaages } from "../../Services/messageServices";
import { SelectAll } from "../Icons/SelectAll";

export function ChatListContextMenu({
  chat,
  x,
  y,
  clearMain,
  currentUser,
  visibleModalReport,
}) {
  const [chats, setChat] = useState(false);
  const [group, setGroup] = useState(false);
  const [channel, setChannel] = useState(false);
  const [mute, setMute] = useState(chat.muteStatus);
  const [posY, setPosY] = useState(null);

  const screenHeight = window.innerHeight;

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

  useEffect(() => {
    setMute(chat.muteStatus);
  }, [chat.muteStatus]);

  useEffect(() => {
    if (y > screenHeight - 185) {
      setPosY(screenHeight - 195);
    } else {
      setPosY(y);
    }
  }, [y, screenHeight]);

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
      className="w-[180px] h-[183px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50"
      style={{ position: "absolute", top: posY, left: x }}
    >
      <ul className="rounded-lg ">
        <li
          onClick={handleOpenNewTab}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <NewTab />
          <p className="font-bold ml-2">Open in new tab</p>
        </li>
        <div className="h-[1px] bg-skin-fill-inverted dark:bg-skin-fill w-[80%] m-auto " />
        <li
          onClick={handleMarkRead}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <SelectAll />
          <p className="font-bold ml-2"> Mark as read</p>
        </li>
        {!mute && (
          <li
            onClick={handleMuteChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
          >
            <VolumeMuteIcon />
            <p className="font-bold ml-2"> Mute</p>
          </li>
        )}
        {mute && (
          <li
            onClick={handleMuteChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
          >
            <VolumeOnIcon />
            <p className="font-bold ml-2"> Unmute</p>
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
          <p className="font-bold ml-2 "> Report</p>
        </li>
        {channel && (
          <li
            onClick={handleLeaveChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2"
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
            <p className="font-bold ml-2"> Leave channel</p>
          </li>
        )}
        {group && (
          <li
            onClick={handleLeaveChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
          flex-row text-skin-error  items-center text-sm pt-2 pb-2"
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
            <p className="font-bold ml-2">Delete and exit</p>
          </li>
        )}
        {chats && (
          <li
            onClick={handleDeleteChat}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2 "
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
            <p className="font-bold ml-2"> Delete</p>
          </li>
        )}
      </ul>
    </div>
  );
}