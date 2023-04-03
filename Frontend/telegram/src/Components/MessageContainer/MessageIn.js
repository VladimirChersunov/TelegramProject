import moment from "moment";
import "moment/locale/ru";

export function MessageIn({ message }) {
 
  const { data,sendTime, text, viewed, author } = message;

 
 //console.log(message)
  // Форматирование времени
  const sendTimeFormatted = moment(sendTime).calendar(null, {
    sameDay: "[Today at] HH:mm",
    lastDay: "[Yesterday at] HH:mm",
    lastWeek: "DD.MM.YYYY",
    sameElse: "DD.MM.YYYY",
  });

  //console.log(messageAuthor)
 
  return (
    <div className="w-[100%] flex justify-start ml-10 dark:text-[#0C0221] ">
      <div className="w-[600px] flex flex-row mt-2">
        <div className="flex flex-col justify-end align-bottom">
          <div className="bg-blue-200 w-[50px] h-[50px] relative">
            <div
              id="roundPart"
              className="absolute  w-[55px] h-[50px] bg-skin-fill  dark:bg-skin-fill-inverted  bottom-0 right-0 
             rounded-br-[200px] "
            >
             
                {author.photo ? (
                  <img
                    src={author.photo}
                    alt="logo"
                    className="rounded-full  h-[40px] w-[40px] border absolute"
                  />
                ) : (
                  <div className="rounded-full   h-[40px] w-[40px] absolute bg-purple-500 flex items-center justify-center select-none">
                    <p className="text-xl">
                      {author.userName &&
                      author.userName[0].toUpperCase() + author.userName[1].toUpperCase()}
                    </p>
                  </div>
                )}
              
            </div>
          </div>
        </div>

        <div
          id="textPart"
          className="bg-blue-200 w-[100%] rounded-r-xl rounded-t-xl "
        >
          <div className="flex flex-row justify-between w-[90%] ml-2 mt-1 font-semibold text-lg">
            {author.userName}
            <time className="text-xs opacity-50">{sendTimeFormatted}</time>
          </div>
          {data ?
              <img
              src={data}
              alt="Selected file"
              className="w-[300px] h-[200px] object-contain"
            /> 
            :
            <div className="flex flex-col ml-2">{text}</div>
          }
         
          { viewed  ? <div className="ml-2 opacity-50 text-xs"> Viewed  </div>
          : <div className="ml-2 opacity-50 text-xs">Not  viewed  </div>}
         
        </div>
      </div>
    </div>
  );
}
