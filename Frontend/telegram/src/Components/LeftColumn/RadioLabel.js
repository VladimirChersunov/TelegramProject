import art from "./../../Assets/art.jpg";
import live from "./../../Assets/live.jpg";
import arduino from "./../../Assets/arduino.jpg";

export function RadioLabel({ chat }) {
  let image;

  switch (chat.id) {
    case 1:
      image = arduino;
      break;
    case 2:
      image = live;
      break;
    case 4:
      image = art;
      break;
    default:
      break;
  }

  return (
    <label
      for={chat.id}
      onContextMenu={(e)=>{
        e.preventDefault();
        console.log("Right Click");
      }}

      onClick={()=>{
       
      }}
    
      className="flex  flex-row cursor-pointer select-none rounded-xl border p-2 border-black  peer-checked:bg-blue-400 peer-checked:font-bold peer-checked:text-white"
    >
      <div>
        {chat.chatImage ? (
          <img
            src={image}
            alt="logo"
            className="rounded-full mr-2 h-[50px] w-[50px]"
          />
        ) : (
          <div className="rounded-full mt-[5px] ml-1 mr-2 h-[50px] w-[50px] bg-purple-500 flex flex-row justify-center text-white text-3xl pt-1">
            <p>T</p>
          </div>
        )}
      </div>

      <div className="flex flex-col  w-[85%] mt-1 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-lg mr-2">{chat.chatName}</p>
            {chat.muteStatus ? (
              <div className="mt-1">&#128263;</div>
            ) : (
              <div className="mt-1">&#128264;</div>
            )}
          </div>

          <div className="">
            <time className="mr-1 text-xs opacity-50">{chat.publishTime}</time>
          </div>
        </div>

        <div>
          <p className="">{chat.shortMessage.substring(0, 30)}</p>
        </div>
      </div>
    </label>
  );
}
