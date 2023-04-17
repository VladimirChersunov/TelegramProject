import { PeopleIcon } from "../Icons/PeopleIcon";
import { PeoplesIcon } from "../Icons/PeoplesIcon";
import { SpeakerIcon } from "../Icons/SpeakerIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function CreateMenu(props) {
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const handleChannelCreate = () => {
    props.visibleAddmembers(true);
    props.chatTypeCallback("Channel");
  };

  const handleGroupCreate = () => {
    props.visibleAddmembers(true);
    props.chatTypeCallback("Group");
  };

  const handleMessageCreate = () => {
    props.visibleStartPrivate(true);
    props.chatTypeCallback("Privat");
  };

  return (
    <ul
      className={`absolute mt-[-150px] ml-[-160px] bg-skin-fill dark:bg-skin-fill-inverted block  group-hover:block shadow-2xl z-50
        border border-skin-border-base dark:border-skin-border-inverted rounded-lg w-[220px] select-none`}
    >
      <li
        onClick={handleChannelCreate}
        className="hover:bg-indigo-900 hover:cursor-pointer rounded-t-lg "
      >
        <div className="h-8 p-1 flex flex-row">
          <SpeakerIcon />
          <p className="font-bold ml-2">{t("mainPage.newChannel")}</p>
        </div>
      </li>
      <li
        onClick={handleGroupCreate}
        className="hover:bg-indigo-900 hover:cursor-pointer"
      >
        <div className="h-8 p-1 flex flex-row">
          <PeoplesIcon />
          <p className="font-bold ml-2">{t("mainPage.newGroup")}</p>
        </div>
      </li>

      <li
        onClick={handleMessageCreate}
        className="hover:bg-indigo-900 hover:cursor-pointer rounded-b-lg"
      >
        <div className="h-8 p-1 flex flex-row">
          <PeopleIcon />
          <p className="font-bold ml-2">{t("mainPage.newMessage")}</p>
        </div>
      </li>
    </ul>
  );
}
