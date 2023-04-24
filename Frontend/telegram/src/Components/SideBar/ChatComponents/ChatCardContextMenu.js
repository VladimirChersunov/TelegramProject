import { RecicleIcon } from "../../Icons/RecicleIcon";
import { PeoplesIcon } from "../../Icons/PeoplesIcon";
import {
  enterPublic,
  isUserInChat,
  leavePublic,
} from "../../../Services/chatServices";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export function ChatCardContextMenu({ x, y, handleCloseContextMenu, chat }) {
  const [userInChat, setUserInChat] = useState(false);
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();
  const menuRef = useRef(null);
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  //проверка есть ли юзер в чате
  useEffect(() => {
    const checkChat = async () => {
      const userInChatExist = await isUserInChat(chat?.id);
      setUserInChat(userInChatExist.result);
    };

    checkChat();
  }, [chat?.id]);

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

    if (window.innerHeight - correctedY < 250) {
      correctedY = window.innerHeight - 250;
    }

    menuRef.current.style.top = `${correctedY}px`;
  }, [x, y]);

  const handleEnterChat = (event) => {
    event.stopPropagation();
    const enterChat = async () => {
      if (!userInChat) {
        const data = await enterPublic(chat?.chatName);
        console.log(data);
      }
    };
    enterChat();
    handleCloseContextMenu();
  };

  const handleDeleteChat = (event) => {
    event.stopPropagation();
    const leaveChat = async () => {
      if (userInChat) {
        const data = await leavePublic(chat?.chatName);
        console.log(data);
      }
    };
    leaveChat();
    handleCloseContextMenu();
  };
  //console.log(chat)
  return (
    <div
    ref={menuRef}
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
     text-lg  border border-skin-border-base dark:border-skin-border-inverted 
     rounded-lg z-50"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg ">
        {!userInChat && (
          <li
            onClick={handleEnterChat}
            id="menu-item"
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
         flex-row  items-center text-sm pt-2 pb-2"
          >
            <PeoplesIcon />
            <p className="font-bold ml-2">{t("mainPage.enterToChat")}</p>
          </li>
        )}

        {userInChat && (
          <li
            id="menu-item"
            onClick={handleDeleteChat}
            className="menu-item hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
         flex-row  items-center text-sm pt-2 pb-2"
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600 fill-none"} />
            <p className="font-bold ml-2 text-skin-error">{t("mainPage.leaveChat")}</p>
          </li>
        )}
      </ul>
    </div>
  );
}
