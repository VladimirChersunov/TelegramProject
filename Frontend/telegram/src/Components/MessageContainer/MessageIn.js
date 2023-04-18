import moment from "moment";
import "moment/locale/ru";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function MessageIn({ message,checkMessage }) {
 
  const { data,sendTime, text, viewed, author } = message;
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);


 
 //console.log(message)
  // Форматирование времени
  const sendTimeFormatted = moment(sendTime).calendar(null, {
    sameDay: `[${t("mainPage.todayAt")}] HH:mm`,
    lastDay: `[${t("mainPage.yesterdayAt")}] HH:mm`,
    lastWeek: "DD.MM.YYYY",
    sameElse: "DD.MM.YYYY",
  });

  //console.log(messageAuthor)
 
  return (
    <div className={`w-[98%] mb-1 flex justify-start ml-4 rounded-lg pb-2 ${
      checkMessage && 'border'
    }`}>
      <div className="max-w-[600px] min-w-[100px] flex flex-row mt-2 ml-10">
        <div className="flex flex-col justify-end align-bottom">
          <div className="bg-skin-fill-message dark:bg-[#170146] w-[50px] h-[50px] relative">
            <div
              id="roundPart"
              className="absolute  w-[55px] h-[50px] bg-skin-fill  dark:bg-skin-fill-inverted  bottom-0 right-0 
             rounded-br-[200px] "
            >
             
                {author?.photo ? (
                  <img
                    src={author?.photo}
                    alt="logo"
                    className="rounded-full  h-[40px] w-[40px] border absolute"
                  />
                ) : (
                  <div className="rounded-full   h-[40px] w-[40px] absolute bg-purple-500 flex items-center justify-center select-none">
                    <p className="text-xl">
                      {author?.userName &&
                      author?.userName[0].toUpperCase() + author?.userName[1].toUpperCase()}
                    </p>
                  </div>
                )}
              
            </div>
          </div>
        </div>

        <div
          id="textPart"
          className="w-[100%] text-skin-base bg-skin-fill-message dark:bg-[#170146] dark:text-skin-inverted rounded-r-xl rounded-t-xl "
        >
          <div className="flex flex-row justify-between items-center w-[90%] ml-2 mt-1 mr-5 font-semibold text-lg">
            {author?.userName}
            <time className="text-xs opacity-50">{sendTimeFormatted}</time>
          </div>
          {data ?
              <img
              src={data}
              alt="Selected file"
              className="w-[300px] h-[200px] object-contain"
            /> 
            :
            <div className="flex flex-col ml-2 mr-2">{text}</div>
          }
         
          { viewed  ? <div className="ml-2 opacity-50 text-xs"> {t("mainPage.viewed")}  </div>
          : <div className="ml-2 opacity-50 text-xs">{t("mainPage.notViewed")}   </div>}
         
        </div>
      </div>
    </div>
  );
}
