import { useEffect, useState } from "react";
import { getMessaagesById, pinnedMessaages } from "../../Services/messageServices";
import { getUserById } from "../../Services/userServices";
import { CloseIcon } from "../Icons/CloseIcon";
import { useTranslation } from "react-i18next";

export function PinnedMessage({ pinned, chat, currentChat,pinnedClose }) {
  

  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null);
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);

  useEffect(() => {
    const getPinnedMessage = async () => {
      try {
        const pinMessage = await getMessaagesById(pinned);
        const pinUser = await getUserById(pinMessage?.userId);       
        setMessage(pinMessage);
        setUser(pinUser.user);
      } catch (error) {
        console.log(error.pinMessage);
      }
    };

    getPinnedMessage();
  }, [pinned]);

  const handleUnPinnedClick = async () => {
    const action = "Remove"
    try {      
      const data = await pinnedMessaages(action, message.id, chat.id);     
      currentChat(data.chat)
      pinnedClose(false)
    } catch (error) {
      console.log(error);
    } 
  };

  

  return (
    <div
      
      className=" w-max sm:w-screen  sm:mr-6 min-w-[200px] max-w-[300px] flex flex-row justify-between sm:border-none  border-l border-skin-border-base dark:border-skin-border-inverted cursor-pointer"
    >
      <div className="flex flex-row items-center  h-[100%] w-[100%]  sm:ml-3">
        {user?.photo ? (
          <img
            src={user?.photo}
            alt="logo"
            className="rounded-full  h-[40px] w-[40px] border ml-2"
          />
        ) : (
          <div className="rounded-full   h-[40px] w-[40px]  bg-purple-500 flex items-center justify-center select-none ml-2">
            <p className="text-xl">
              {user?.userName &&
                user?.userName[0].toUpperCase() +
                  user?.userName[1].toUpperCase()}
            </p>
          </div>
        )}

        <div className="flex  flex-row  items-center justify-center ml-2 ">
          <div className="flex flex-col ">
            <p className="mr-2 sm:mr-0 text-base select-none">{t("mainPage.pinnedMessage")}</p>
            <p className="text-xs">{message?.text.slice(0, 60)}</p>
          </div>
          <div className="flex items-center justify-center">
            <button onClick={handleUnPinnedClick} className="rounded-full w-[30px] ml-1 h-[30px] flex items-center justify-center hover:bg-skin-button-accent-hover">
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
