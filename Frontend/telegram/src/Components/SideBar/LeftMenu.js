import { PeopleIcon } from "../Icons/PeopleIcon";
import { SavedIcon } from "../Icons/SavedIcon";
import { SettingIcon } from "../Icons/SettingIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import { BugIcon } from "../Icons/BugIcon";
import { InfoIcon } from "../Icons/InfoIcon";
import { ThemeSwitch } from "./ThemeSwitch";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function LeftMenu({
  darkMode,
  toggleDarkMode,
  visibleAbout,
  visibleBugReport,
  visibleContact,
  visibleSetting,
  currentChat,
  chats,
  changeThemes
}) {
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);
  const savedMessage = chats.find((chat) => chat.type === "Favorite");

  return (
    <ul
      className={`absolute z-50 block mt-1 group-hover:block shadow-2xl bg-skin-fill dark:bg-skin-fill-inverted
       border border-skin-border-base dark:border-skin-border-inverted rounded-lg  w-max select-none`}
    >
      <li
        onClick={() => {
          currentChat(savedMessage);
        }}
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg h-8 p-1 flex flex-row items-center"
      >
        <SavedIcon />
        <p className="font-bold ml-2">{t("mainPage.savedMesssages")}</p>
      </li>
      <li
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1
       flex flex-row items-center"
        onClick={() => {
          visibleContact(true);
        }}
      >
        <PeopleIcon />
        <p className="font-bold ml-2">{t("mainPage.contacts")}</p>
      </li>
      <li
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1 flex flex-row
       items-center"
        onClick={() => {
          visibleSetting(true);
        }}
      >
        <SettingIcon />
        <p className="font-bold ml-2">{t("mainPage.setting")}</p>
      </li>
      <li className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1 flex flex-row items-center">
        <MoonIcon />
        <p className="font-bold ml-2 mr-4">{t("mainPage.nightMode")}</p>
        <ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} changeThemes={changeThemes}/>
      </li>
      <li
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1 flex flex-row items-center"
        onClick={() => {
          visibleBugReport(true);
        }}
      >
        <BugIcon />
        <p className="font-bold ml-2">{t("mainPage.reportBug")}</p>
      </li>
      <li
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1 flex flex-row items-center"
        onClick={() => {
          visibleAbout(true);
        }}
      >
        <InfoIcon />
        <p className="font-bold ml-2">{t("mainPage.aboutUs")}</p>
      </li>
      <li className="flex justify-center items-center">
        <p className="text-center w-[100%] ml-2 text-xs h-8 p-1   ">
          Cryptic rev.3.0
        </p>
      </li>
    </ul>
  );
}
