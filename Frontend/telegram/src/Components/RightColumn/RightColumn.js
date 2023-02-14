import { useState, useEffect } from "react";
import Switch from "../LeftColumn/Switch";
import art from "./../../Assets/art.jpg";
import live from "./../../Assets/live.jpg";
import arduino from "./../../Assets/arduino.jpg";

export function RightColumn(props) {
  
  const [type, setType] = useState(false);
 
  let image;
  switch (props.chat.id) {
    case 1:
      image = arduino;

      break;
    case 2:
      image = live;
      break;
    case 3:
      image = null;
      break;
    case 4:
      image = art;
      break;
    default:
      break;
  }

  useEffect(() => {
    if (props.chat.type === "chat") {
      setType(true);
    } else {
      setType(false);
    }
  }, [props.chat.type]);

  return (
    <div className={`w-[35%] block  border border-l-black`}>
      <div
        name="rightHeader"
        className="h-[59px] w-[100%] flex flex-row justify-between border border-b-black px-2 items-center "
      >
        <button
          onClick={() => {
            props.toggleRightColumn(false);
          }}
          className=" hover:bg-slate-300 rounded-full p-auto h-[40px] w-[40px]"
        >
          &#10006;
        </button>
        <label className="text-2xl font-bold text-center mx-auto">
          {props.chat.chatName}
        </label>
        {type && (
          <button className=" hover:bg-slate-300 rounded-full p-auto  h-[40px] w-[40px]">
            &#128394;
          </button>
        )}
      </div>
      <div className="h-[100%]  ">
        {image ? (
          <img src={image} alt="logo" className=" mr-2 h-[50%] w-[100%] " />
        ) : (
          <div className=" mr-2 h-[50%] w-[100%] bg-purple-600 text-white text-[250px]">
            <p className="pl-[35%]">T</p>
          </div>
        )}

        {props.chat.chatInfo && (
          <div className="flex flex-row ">
            <div className="text-3xl ml-5 mt-5">&#128712;</div>
            <p className="ml-5 mt-6 font-bold">{props.chat.chatInfo}</p>
          </div>
        )}
        <div className="flex flex-row h-[40px] w-[100%] px-2 items-center justify-between mt-2">
          <button className="text-2xl ml-5 mt-5">&#128264;</button>
          <label className="text-2xl text-left">Notifications</label>
          <Switch chat={props.chat} />
        </div>
      </div>
    </div>
  );
}
