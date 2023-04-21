import { ColorRAdioButton } from "../ColorRadioButton";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import imagesArray from "../../Services/imageService";

export function ThemesPicker({
  visibleThemesPicker,
  changeThemes,
  darkMode,
  toggleDarkMode,
  changePatternBackground
}) {
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
  const handleBack = () => {
    visibleThemesPicker(false);
  };

  const handleImageClick = (index) => {
   
    changePatternBackground(index);
    localStorage.setItem('imageIndex', index)
  };

  return (
    <div className="flex flex-col w-[350px] sm:w-screen overflow-auto">
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

      <span className="w-full text-center mt-5 text-xl">{t("mainPage.themeColor")}</span>

      <ColorRAdioButton
        changeThemes={changeThemes}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

<span className="w-full text-center mt-10 text-xl">{t("mainPage.chatBackground")}</span>

 {/* images */}
 <div className="flex flex-wrap justify-center mt-4">
        {Object.values(imagesArray).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`theme-${index}`}
            className="w-[130px] h-[150px] cursor-pointer m-2 border border-skin-border-base "
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

    </div>
  );
}
