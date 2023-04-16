import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export function StartPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [languageButtonState, setLanguageButtonState] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
    setLanguageButtonState(false);
  }, [i18n.language]);

  const handleLanguageButtonClick = () => {
    setLanguageButtonState((state) => !state);
  };

  const handleUkrButtonClick = () => {
    i18n.changeLanguage("ukr");
  };

  const handleEnButtonClick = () => {
    i18n.changeLanguage("en");
  };

  return (
    <div className="bg-skin-fill-inverted w-[100%] h-screen flex justify-center font-montserrat content-center items-center">
      <div
        onClick={handleLanguageButtonClick}
        className={`w-[45px] ${
          languageButtonState
            ? "h-[50px]"
            : "h-[30px] cursor-pointer  hover:bg-skin-button-accent-hover"
        } flex items-center justify-center text-[16px] 
         select-none
       bg-skin-fill-inverted border border-skin-border-inverted absolute right-0 top-0 mt-[45px] mr-[65px] rounded-2xl text-skin-inverted`}
      >
        {!languageButtonState && (
          <button> {currentLanguage === "ukr" ? "UA" : "EN"}</button>
        )}

        {languageButtonState && (
          <div className="flex  w-[44px]  items-center justify-center flex-col bg-skin-fill rounded-2xl text-skin-base ">
            <button
              onClick={handleUkrButtonClick}
              className="cursor-pointer   w-[43px] rounded-t-2xl"
            >
              UA
            </button>
            <div className="border-t w-[25px] border-skin-border-base"></div>
            <button
              onClick={handleEnButtonClick}
              className="cursor-pointer   w-[43px] rounded-b-2xl"
            >
              EN
            </button>
          </div>
        )}
      </div>
      <div className="w-[384px]  h-[400px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />

        <div className="text-[18px] text-skin-inverted text-center font-medium leading-[27px] tracking-normal">
          {t("startPage.part1")}
        </div>
        <div className="text-[18px] text-skin-inverted text-center font-medium leading-[27px] tracking-normal">
          {t("startPage.part2")}
        </div>
        <button
          onClick={() => {
            navigate("/signin ", { language: currentLanguage });
          }}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
           w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          {t("startPage.btn")}
        </button>
      </div>
    </div>
  );
}
