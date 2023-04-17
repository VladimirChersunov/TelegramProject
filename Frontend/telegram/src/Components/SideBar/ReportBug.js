import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { useState,useEffect } from "react";
import { bugReport } from "../../Services/bugReportService";
import { useTranslation } from "react-i18next";

export function ReportBug(props) {
  const handleClickBack = () => {
    props.visibleBugReport(false);
  };

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [subjectError, setSubjectError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const subjectRegex = /^.{6,20}$/;
  const messageRegex = /^.{20,120}$/;
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);

  const handleSend = async (event) => {
    event.preventDefault();
    setSubjectError("");
    setMessageError("");
    setError("");
    if (!subjectRegex.test(subject)) {
      setSubjectError(`${t("mainPage.subjectError")}`);
      return;
    }
    if (!messageRegex.test(message)) {
      setMessageError(`${t("mainPage.messageError")}`);
      return;
    }
    try {
      setIsLoading(true);
      const username = localStorage.getItem("username");
      await bugReport(username, subject, message);
     
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      handleClickBack();
    }
  };

  return (
    <div className="flex flex-col w-[350px] w-min-[350px] justify-center">
      <div className="flex flex-row items-center mt-4">
      <button
        className="ml-4  rounded-full hover:bg-skin-button-accent-hover h-[40px] w-[40px] flex
         justify-center items-center"
        onClick={handleClickBack}
      >
        <BackArrowIcon />
      </button>
      <h2 className="text-lg ml-2 font-medium">{t("mainPage.reportBug")}</h2>
      </div>
    
      <div className="flex flex-col h-screen items-center justify-center">
        <div className=" border-t border-skin-border-base dark:border-skin-border-inverted w-[90%] mt-2"/>
        
        
        <div className="flex-auto p-4 overflow-auto">
          <form className="flex flex-col items-center">
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-skin-base dark:text-skin-inverted font-medium mb-2"
              >
                {t("mainPage.subject")}:
              </label>
              <input
                type="text"
                id="subject"
                autoComplete="off"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                maxLength="20"
                name="subject"
                className="w-full border-b border-skin-border-base dark:border-skin-border-inverted
              text-skin-base p-2 bg-skin-fill dark:bg-skin-fill-inverted outline-none dark:text-skin-inverted"
                required
              />
            </div>
            {subjectError && (
              <label className="text-skin-error text-[12px] pt-1 pl-1 mb-2">
                {subjectError}
              </label>
            )}

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-skin-base dark:text-skin-inverted font-medium mb-2"
              >
                {t("mainPage.message")}:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                maxLength="120"
                className="w-full text-skin-base border-skin-border-base border rounded-md resize-none
             dark:border-skin-border-inverted  p-2 bg-skin-fill dark:bg-skin-fill-inverted outline-none dark:text-skin-inverted"
                rows="6"
                required
              ></textarea>
            </div>
            {messageError && (
              <label className="text-skin-error text-[12px] pt-1 pl-1 mb-2 text-center">
                {messageError}
              </label>
            )}

            {error && (
              <p className="m-0 text-skin-error mt-2 text-center text-xs">
                {error}
              </p>
            )}
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="py-2 bg-skin-button-accent hover:bg-skin-button-accent-hover px-4
           rounded-md dark:bg-skin-fill dark:hover:bg-skin-button-accent-hover text-skin-inverted dark:text-skin-base
            transition-colors duration-300 w-[70%]"
            >
              {isLoading ? `${t("mainPage.loading")}` : `${t("mainPage.send")}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
