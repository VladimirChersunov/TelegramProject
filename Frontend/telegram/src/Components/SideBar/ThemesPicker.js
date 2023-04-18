import { ColorRAdioButton } from "../ColorRadioButton";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function ThemesPicker({
  visibleThemesPicker,
  changeThemes,
  darkMode,
  toggleDarkMode,
}) {
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
  const handleBack = () => {
    visibleThemesPicker(false);
  };

  return (
    <div className="flex flex-col w-[350px] w-min-[350px] overflow-auto">
      {/* header */}
      <div className="flex flex-row items-center">
        <button
          onClick={handleBack}
          className="ml-2 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
         justify-center items-center"
        >
          <BackArrowIcon />
        </button>

        <label className="text-2xl mt-4 ml-2 select-none">{t("mainPage.changeTheme")}</label>
      </div>

      <ColorRAdioButton
        changeThemes={changeThemes}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}
