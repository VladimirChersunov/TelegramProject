import moment from "moment";
import "moment/locale/ru";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function MessageOut({ message,checkMessage}) {
  const { data, deliveryStatus,  sendTime, text, } = message;
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

  return (
    <div className={`w-[98%] mb-1 flex justify-end ml-4 rounded-lg pb-2 ${
      checkMessage && 'border'
    }`}>
      <div className="w-max h-max flex flex-row mt-2 mr-10 ">
        <div className="text-skin-base bg-skin-fill-message dark:bg-[#170146] dark:text-skin-inverted w-[100%] rounded-l-xl rounded-t-xl">
          <div className="flex flex-row justify-end items-center w-[90%] ml-2  mt-1 font-semibold text-lg">
            <time className="text-xs opacity-50 mr-2">{sendTimeFormatted}</time>
          </div>
          <div className="flex flex-col ml-2">
          {data ?
              <img
              src={data}
              alt="Selected file"
              className="w-[300px] h-[200px] object-contain mr-2"
            /> 
            :
            <p className="flex flex-col ml-2 max-w-[600px] min-w-[100px] mr-2 whitespace-normal break-words">{text}</p>
          }
            <div className="flex w-full justify-end items-center">
            {deliveryStatus ? <p className=" opacity-50 text-xs mr-2">{t("mainPage.delivered")} </p>
          : <div className=" opacity-50 text-xs text-skin-error">{t("mainPage.notDelivered")}</div>}
            </div>
          
          </div>
        </div>

        <div className="flex flex-col justify-end align-bottom">
          <div className=" bg-skin-fill-message dark:bg-[#170146]  w-[50px] h-[50px] relative">
            <div
              className=" absolute bg-skin-fill dark:bg-skin-fill-inverted w-[50px] h-[50px] bottom-0 left-0
             rounded-bl-[100px] mt-3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
