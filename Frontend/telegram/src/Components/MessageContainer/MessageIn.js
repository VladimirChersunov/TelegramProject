import moment from "moment";
import "moment/locale/ru";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export function MessageIn({ message, checkMessage }) {
  const { data, sendTime, text, author } = message;
  const language = localStorage.getItem("language");
  const [viewed, setViewed] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  useEffect(() => {
    const whoViewed = message.whoViewed;
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const userId = currentUser?.id;
    if (whoViewed.includes(userId)) {
      setViewed(true);
    } else {
      setViewed(false);
    }
  }, [message.whoViewed]);

  // Форматирование времени
  const sendTimeFormatted = moment(sendTime).calendar(null, {
    sameDay: `[${t("mainPage.todayAt")}] HH:mm`,
    lastDay: `[${t("mainPage.yesterdayAt")}] HH:mm`,
    lastWeek: "DD.MM.YYYY",
    sameElse: "DD.MM.YYYY",
  });

  //console.log(messageAuthor)

  return (
    <div
      className={`w-[98%] sm:w-screen mb-1 flex justify-start ml-4 sm:ml-0 rounded-lg pb-2 ${
        checkMessage && "border"
      }`}
    >
      <div className="max-w-[600px] min-w-[100px] flex flex-row mt-2 ml-5 sm:ml-0">
        <div className="flex h-full w-[60px] items-end ml-5 mr-2">
          {author?.photo ? (
            <img
              src={author?.photo}
              alt="logo"
              className="rounded-full mr-2  h-[50px] w-[50px] select-none border border-gray-500 absolute"
            />
          ) : (
            <div className="rounded-full   h-[50px] w-[50px] absolute bg-purple-500 flex items-center justify-center select-none">
              <p className="text-xl">
                {author?.userName &&
                  author?.userName[0].toUpperCase() +
                    author?.userName[1].toUpperCase()}
              </p>
            </div>
          )}
        </div>

        <div
          id="textPart"
          className="w-[100%] text-skin-base bg-skin-fill-message dark:bg-[#170146] dark:text-skin-inverted rounded-t-xl rounded-br-xl  z-10"
        >
          <div className="flex flex-row sm:flex-col sm:justify-start sm:items-start justify-between items-center w-[90%] ml-2 mt-1 mr-5 font-semibold text-lg">
            {author?.userName}
            <time className="text-xs opacity-50 sm:mr-2">{sendTimeFormatted}</time>
          </div>
          {data ? (
            <img
              src={data}
              alt="Selected file"
              className="w-[300px] h-[200px] object-contain "
            />
          ) : (
            <p className="flex flex-col ml-2 mr-2 sm:mr-5 ">{text}</p>
          )}

          {viewed ? (
            <div className="ml-2 opacity-50 text-xs">
              {t("mainPage.viewed")}
            </div>
          ) : (
            <div className="ml-2 opacity-50 text-xs">
              {t("mainPage.notViewed")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
