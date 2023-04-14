import moment from "moment";
import "moment/locale/ru";

export function MessageOut({ message,checkMessage}) {
  const { data, deliveryStatus,  sendTime, text, } = message;
  //console.log(message)
  // Форматирование времени
  const sendTimeFormatted = moment(sendTime).calendar(null, {
    sameDay: "[Today at] HH:mm",
    lastDay: "[Yesterday at] HH:mm",
    lastWeek: "DD.MM.YYYY",
    sameElse: "DD.MM.YYYY",
  });

  return (
    <div className={`w-[98%] mb-1 flex justify-end ml-4 rounded-lg pb-2 ${
      checkMessage && 'border'
    }`}>
      <div className="w-max h-max flex flex-row mt-2 mr-10 ">
        <div className="bg-blue-200 w-[100%] rounded-l-xl rounded-t-xl">
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
            {deliveryStatus ? <p className=" opacity-50 text-xs mr-2">Delivered </p>
          : <div className=" opacity-50 text-xs text-skin-error">Not delivered </div>}
            </div>
          
          </div>
        </div>

        <div className="flex flex-col justify-end align-bottom">
          <div className="bg-blue-200 w-[50px] h-[50px] relative">
            <div
              className=" absolute bg-skin-fill dark:bg-[#0C0221] w-[50px] h-[50px] bottom-0 left-0
             rounded-bl-[100px] mt-3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
