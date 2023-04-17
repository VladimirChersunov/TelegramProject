import { SearchIcon } from "../Icons/SearchIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function SerchInputInActive({ visibleSearchWindow }) {
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);
  const handleSerchWindow = () => {
    visibleSearchWindow(true);
  };

  return (
    <div className="w-full pr-2 mt-3">
      <div className=" flex flex-row items-center border border-skin-border-base dark:border-skin-border-inverted  rounded-3xl px-2 ">
        <SearchIcon />

        <input
          className="h-[40px] w-[90%]  text-xl rounded-xl outline-none bg-skin-fill dark:bg-skin-fill-inverted ml-2"
          type="text"
          placeholder={t("mainPage.search")}
          onClick={handleSerchWindow}
        />
      </div>
    </div>
  );
}
