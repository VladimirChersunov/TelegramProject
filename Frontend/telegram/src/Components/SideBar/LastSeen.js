import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function LastSeen({ lastOnline }) {
  const language = localStorage.getItem("language");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
  const timeAgo = getTimeAgo(lastOnline,t);
  return <span className="text-xs"> {timeAgo}</span>;
}

export function getTimeAgo(lastOnline,t) {

  const now = new Date();
  const diff = (now - new Date(lastOnline)) / 1000; // получение разницы в секундах
  if (diff < 10) {
    return `${t("mainPage.online")}`;
  } else if (diff < 60) {
    return `${t("mainPage.justNow")}`;
  } else if (diff < 60 * 60) {
    // 1 час в секундах
    const minutes = Math.floor(diff / 60);
    return `${t("mainPage.lastSeen")} ${minutes} ${t("mainPage.minAgo")}`;
  } else if (diff < 60 * 60 * 24) {
    // 1 день в секундах
    const hours = Math.floor(diff / 60 / 60);
    return `${t("mainPage.lastSeen")} ${hours} ${hours === 1 ? `${t("mainPage.hour")}` : `${t("mainPage.hour")}`} ${t("mainPage.ago")}`;
  } else if (diff < 60 * 60 * 24 * 7) {
    // 1 неделя в секундах
    const days = Math.floor(diff / 60 / 60 / 24);
    return `${t("mainPage.lastSeen")} ${days} ${days === 1 ? `${t("mainPage.day")}` : `${t("mainPage.day")}`} ${t("mainPage.ago")}`;
  } else if (diff < 60 * 60 * 24 * 30) {
    // 1 месяц в секундах (приблизительно)
    const weeks = Math.floor(diff / 60 / 60 / 24 / 7);
    return `${t("mainPage.lastSeen")} ${weeks} ${weeks === 1 ? `${t("mainPage.week")}` : `${t("mainPage.week")}`} ${t("mainPage.ago")}`;
  } else {
    const months = Math.floor(diff / 60 / 60 / 24 / 30);
    return `${t("mainPage.lastSeen")} ${months} ${months === 1 ? `${t("mainPage.month")}` : `${t("mainPage.month")}`} ${t("mainPage.ago")}`;
  }
}
