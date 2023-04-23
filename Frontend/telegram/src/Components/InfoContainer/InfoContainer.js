import { useState, useEffect } from "react";
import { CloseIcon } from "../Icons/CloseIcon";
import { PenIcon } from "../Icons/PenIcon";
import { InfoIcon } from "../Icons/InfoIcon";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";
import { SavedIcon } from "../Icons/SavedIcon";
import { MuteSwitch } from "./MuteSwitch";
import { useTranslation } from "react-i18next";

export function InfoContainer({ toggleRightColumn, chat }) {
  const [type, setType] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const language = localStorage.getItem("language");  
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  useEffect(() => {
    if (chat.type === "chat") {
      setType(true);
      setFavorite(false);
    }
    if (chat.type === "Favorite") {
      setFavorite(true);
    } else {
      setType(false);
      setFavorite(false);
    }
  }, [chat.type]);

  return (
    <div className={`w-[350px] z-50 sm:w-[280px]  h-screen flex flex-col `}>

      <div
        name="rightHeader"
        className="h-[59px] w-[100%] z-50  flex flex-row border-l border-skin-border-base
         dark:border-skin-border-inverted px-2 items-center "
      >
        <button
          onClick={() => {
            toggleRightColumn(false);
          }}
          className="rounded-full hover:bg-skin-button-accent-hover p-auto h-[40px]
           w-[40px] flex justify-center items-center"
        >
          <CloseIcon />
        </button>
        <label className="text-2xl font-bold   mx-auto">{chat.chatName}</label>
        {type && (
          <button
            className=" hover:bg-skin-button-accent-hover rounded-full p-auto flex items-center
           justify-center  h-[40px] w-[40px]"
          >
            <PenIcon />
          </button>
        )}
      </div>
      <div className="h-[100%]  border-l border-skin-border-base dark:border-skin-border-inverted pt-2 flex items-center flex-col ">
        {chat.chatImage ? (
          <img
            src={chat?.chatImage}
            alt="logo"
            className="h-[150px] w-[150px] select-none mb-5  rounded-full"
          />
        ) : (
          <div className="rounded-full   h-[150px] w-[150px] mb-5  bg-purple-500 flex items-center justify-center select-none">
            {favorite ? (
              <SavedIcon
                styles={
                  "h-[100px] w-[100px] stroke-skin-stroke-base  fill-none dark:stroke-skin-stroke-inverted"
                }
              />
            ) : (
              <p className="text-[50px]">
                {chat.chatName[0].toUpperCase() +
                  chat.chatName[1].toUpperCase()}
              </p>
            )}
          </div>
        )}

        {chat.chatInfo && (
          <div className="flex flex-row items-center justify-start pl-5 pt-5 w-full">
            <InfoIcon />
            <p className="ml-5  font-bold">{chat.chatInfo}</p>
          </div>
        )}
        {!favorite && (
          <div className="flex flex-row h-[40px] w-[100%] pl-5  items-center justify-between mt-5 pr-5">
            <VolumeOnIcon />
            <div className="flex flex-row w-[80%] ml-5">
              <label className="text-lg">{t("mainPage.notifications")}</label>
            </div>

            <MuteSwitch chat={chat} />
          </div>
        )}
      </div>
    </div>
  );
}
