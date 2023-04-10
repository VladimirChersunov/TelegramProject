import moment from "moment";
import "moment/locale/ru";

export function MessageForToast({ message }) {
  //console.log(message)
  // Форматирование времени
  const sendTimeFormatted = moment(message?.sendTime).calendar(null, {
    sameDay: "[Today at] HH:mm",
    lastDay: "[Yesterday at] HH:mm",
    lastWeek: "DD.MM.YYYY",
    sameElse: "DD.MM.YYYY",
  });

  

  return (
    <div className="w-[270px] h-[100px] bg-skin-fill dark:bg-skin-fill-inverted flex items-center justify-center  rounded-lg">
    <span className="text-center">{message}</span>
    </div>
  );
}
