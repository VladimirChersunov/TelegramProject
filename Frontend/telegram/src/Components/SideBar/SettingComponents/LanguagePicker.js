import { BackArrowIcon } from "../../Icons/BackArrowIcon";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export function LanguagePicker({ visibleLanguagePicker }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const handleBack = () => {
    visibleLanguagePicker(false);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  function onChangeValue(event) {
    setLanguage(event.target.value);
    localStorage.setItem("language", event.target.value); // сохраняем язык в localStorage
  }

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

        <label className="text-2xl mt-4 ml-2 select-none">
          {t("mainPage.changeLanguage")}
        </label>
      </div>

      <div
        className="flex justify-center flex-col items-center mt-10"
        onChange={onChangeValue}
      >
        <div
          className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted
    shadow-2xl "
        >
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
                   bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
                     align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="en"
            defaultChecked={language==='en'}
          />
          <label className="ml-5">English</label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="ukr"
            defaultChecked={language==='ukr'}
          />
          <label className="ml-5">Українська </label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="ru"
            defaultChecked={language==='ru'}
          />
          <label className="ml-5">Русский </label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="fr"
            defaultChecked={language==='fr'}
          />
          <label className="ml-5">Français </label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="de"
            defaultChecked={language==='de'}
          />
          <label className="ml-5">Deutsch </label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="pl"
            defaultChecked={language==='pl'}
          />
          <label className="ml-5">Polski </label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="esp"
            defaultChecked={language==='esp'}
          />
          <label className="ml-5">Español </label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="prt"
            defaultChecked={language==='prt'}
          />
          <label className="ml-5">Português </label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="it"
            defaultChecked={language==='it'}
          />
          <label className="ml-5">Italiano </label>
        </div>

        <div className="w-[250px] h-[50px] flex items-center justify-start border-b border-skin-border-base dark:border-skin-border-inverted shadow-2xl ">
          <input
            className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-skin-border-base dark:border-skin-border-inverted
             bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
               align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer ml-2"
            type="radio"
            name="inlineRadioOptions"
            value="ch"
            defaultChecked={language==='ch'}
          />
          <label className="ml-5">中國人 </label>
        </div>
      </div>
    </div>
  );
}
