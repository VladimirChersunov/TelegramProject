import { useState, useEffect } from "react";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";
import { RecicleIcon } from "../Icons/RecicleIcon";
import { FlagIcon } from "../Icons/FlagIcon";
import { VolumeMuteIcon } from "../Icons/VolumeMuteIcon";
import {
  chatNotifications,
  deleteChatById,
  enterPublic,
  getChatById,
  isUserInChat,
  leavePublic,
} from "../../Services/chatServices";
import { useTranslation } from "react-i18next";
import { PeoplesIcon } from "../Icons/PeoplesIcon";

export function RightMenu({ chat, clearMain, visibleModalReport, currentChat }) {
  const [chats, setChat] = useState(false);
  const [group, setGroup] = useState(false);
  const [channel, setChannel] = useState(false);
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const whoMuted = chat?.whoMuted;
  const [chatMuteStatus, setChatMuteStatus] = useState(false);
  const [userInChat, setUserInChat] = useState(false);


  useEffect(() => {
    if (whoMuted?.includes(currentUser?.id)) {
      setChatMuteStatus((prev) => true);
    } else {
      setChatMuteStatus((prev) => false);
    }
  }, [chat?.whoMuted]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const handleEnterChat = (event) => {
    event.stopPropagation();
    const enterChat = async () => {
      if (!userInChat) {
        const data = await enterPublic(chat?.chatName);
        console.log(data);
        const newChat = await getChatById(chat?.id)
        console.log(newChat.chat)
        //currentChat(newChat.chat)
      }
    };
    enterChat();
  };

  const handleLeaveChat = (event) => {
    event.stopPropagation();
    const leaveChat = async () => {
      const responce = await leavePublic(chat?.chatName);
      clearMain(false);
      console.log(responce);
      const newChat = await getChatById(chat?.id)
      //console.log(newChat.chat)
      currentChat(newChat.chat)
    };
    leaveChat();
  };

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
    const checkChat = async () => {
      const userInChatExist = await isUserInChat(chat?.id);
      setUserInChat(userInChatExist.result);
    };

    checkChat();

  }, [chat.type,handleEnterChat,handleLeaveChat]);

 useEffect(() => {
   const refreshChat = async()=>{
    const newChat = await getChatById(chat?.id)
    //console.log(newChat.chat)
    currentChat(newChat.chat)
   }
   refreshChat()
  }, [handleEnterChat]);

  const handleMuteChat = (event) => {
    const muteChat = async () => {
      const responce = await chatNotifications(chat?.id);
      setChatMuteStatus((prev) => !prev);
      console.log(responce.result);
    };
    event.stopPropagation();
    muteChat();
  };

  

  const handleDeleteChat = (event) => {
    event.stopPropagation();
    const deleteChat = async () => {
      const responce = await deleteChatById(chat?.id);
      clearMain(false);
      console.log(responce);
    };
    deleteChat();
  };

  return (
    <ul
      className={`absolute mt-4 right-0   block  group-hover:block shadow-2xl  border border-skin-border-base
       dark:border-skin-border-inverted rounded-lg text-lg  w-max  bg-skin-fill dark:bg-skin-fill-inverted z-50 `}
    >
      {!chatMuteStatus && (
        <li
          onClick={handleMuteChat}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2 p-1 flex flex-row  items-center"
        >
          <VolumeMuteIcon />

          <p className="font-bold mx-2">{t("mainPage.mute")}</p>
        </li>
      )}
      {chatMuteStatus && (
        <li
          onClick={handleMuteChat}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2 p-1 flex flex-row  items-center"
        >
          <VolumeOnIcon />

          <p className="font-bold mx-2">{t("mainPage.unmute")}</p>
        </li>
      )}

      <li
        onClick={(event) => {
          event.stopPropagation();

          visibleModalReport(true);
        }}
        className="hover:bg-skin-button-accent-hover hover:cursor-pointer pl-2 p-1 flex flex-row  items-center"
      >
        <FlagIcon />
        <p className="font-bold mx-2">{t("mainPage.report")}</p>
      </li>

      <div className="w-[100%] flex justify-center">
        <div className="w-[80%] h-[1px] bg-skin-fill-inverted dark:bg-skin-fill mt-2 "></div>
      </div>

      {channel && userInChat && (
        <li
          onClick={handleLeaveChat}
          className="hover:bg-skin-button-accent-hover hover:cursor-pointer text-skin-error rounded-b-lg pl-2 p-1 flex flex-row  items-center"
        >
          <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
          <p className="font-bold mx-2">{t("mainPage.leaveChannel")}</p>
        </li>
      )}
      {group && userInChat && (
        <li
          onClick={handleLeaveChat}
          className="hover:bg-skin-button-accent-hover hover:cursor-pointer text-skin-error rounded-b-lg pl-2 p-1 flex flex-row  items-center"
        >
          <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
          <p className="font-bold mx-2">{t("mainPage.deleteAndExit")}</p>
        </li>
      )}

      {!userInChat && (
        <li
          onClick={handleEnterChat}
          className="hover:bg-skin-button-accent-hover hover:cursor-pointer  rounded-b-lg pl-2 p-1 flex flex-row  items-center"
        >
          <PeoplesIcon/>
          <p className="font-bold mx-2">{t("mainPage.enterToChat")}</p>
        </li>
      )}

      {chats && userInChat &&(
        <li
          onClick={handleDeleteChat}
          className="hover:bg-skin-button-accent-hover hover:cursor-pointer text-skin-error rounded-b-lg pl-2 p-1 flex flex-row  items-center"
        >
          <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
          <p className="font-bold mx-2">{t("mainPage.delete")}</p>
        </li>
      )}
    </ul>
  );
}
