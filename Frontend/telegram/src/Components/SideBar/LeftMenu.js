import { PeopleIcon } from "../Icons/PeopleIcon";
import { SavedIcon } from "../Icons/SavedIcon";
import { SettingIcon } from "../Icons/SettingIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import { BugIcon } from "../Icons/BugIcon";
import { InfoIcon } from "../Icons/InfoIcon";
import { ThemeSwitch } from "./ThemeSwitch";

export function LeftMenu({
  darkMode,
  toggleDarkMode,
  visibleAbout,
  visibleBugReport,
  visibleContact,
  visibleSetting,
  currentChat,
  chats,
}) {
  const savedMessage = chats.find((chat) => chat.type === "Favorite");

  return (
    <ul
      className={`absolute block mt-1 group-hover:block shadow-2xl bg-skin-fill dark:bg-skin-fill-inverted
       border border-skin-border-base dark:border-skin-border-inverted rounded-lg  w-[200px] select-none`}
    >
      <li
        onClick={() => {
          currentChat(savedMessage);
        }}
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg h-8 p-1 flex flex-row items-center"
      >
        <SavedIcon />
        <p className="font-bold ml-2">Saved Messsages</p>
      </li>
      <li
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1
       flex flex-row items-center"
        onClick={() => {
          visibleContact(true);
        }}
      >
        <PeopleIcon />
        <p className="font-bold ml-2">Contacts</p>
      </li>
      <li
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1 flex flex-row
       items-center"
        onClick={() => {
          visibleSetting(true);
        }}
      >
        <SettingIcon />
        <p className="font-bold ml-2">Setting</p>
      </li>
      <li className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1 flex flex-row items-center">
        <MoonIcon />
        <p className="font-bold ml-2 mr-4">Night Mode</p>
        <ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </li>
      <li
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1 flex flex-row items-center"
        onClick={() => {
          visibleBugReport(true);
        }}
      >
        <BugIcon />
        <p className="font-bold ml-2">Report bug</p>
      </li>
      <li
        className="hover:cursor-pointer hover:bg-skin-button-accent-hover  h-8 p-1 flex flex-row items-center"
        onClick={() => {
          visibleAbout(true);
        }}
      >
        <InfoIcon />
        <p className="font-bold ml-2">About Us</p>
      </li>
      <li className="flex justify-center items-center">
        <p className="text-center w-[100%] ml-2 text-xs h-8 p-1   ">
          Cryptic rev.3.0
        </p>
      </li>
    </ul>
  );
}
