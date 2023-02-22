import { useState, useEffect } from "react";
import {Switch} from "../SideBar/Switch";
import art from "./../../Assets/art.jpg";
import live from "./../../Assets/live.jpg";
import arduino from "./../../Assets/arduino.jpg";
import { CloseIcon } from "../Icons/CloseIcon";
import { PenIcon } from "../Icons/PenIcon";
import { InfoIcon } from "../Icons/InfoIcon";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";

export function InfoContainer(props) {
  
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
    <div className={`w-[35%] block `}>
      <div
        name="rightHeader"
        className="h-[59px] w-[100%] flex flex-row justify-between border-l border-skin-border-base
         dark:border-skin-border-inverted px-2 items-center "
      >
        <button
          onClick={() => {
            props.toggleRightColumn(false);
          }}
          className="rounded-full hover:bg-skin-button-accent-hover p-auto h-[40px]
           w-[40px] flex justify-center items-center"
        >
         <CloseIcon/>
        </button>
        <label className="text-2xl font-bold   mx-auto">
          {props.chat.chatName}
        </label>
        {type && (
          <button className=" hover:bg-skin-button-accent-hover rounded-full p-auto flex items-center
           justify-center  h-[40px] w-[40px]">
            <PenIcon/>
          </button>
        )}
      </div>
      <div className="h-[100%]  border-l border-skin-border-base dark:border-skin-border-inverted">
        {image ? (
          <img src={image} alt="logo" className=" mr-2 h-[50%] w-[100%] " />
        ) : (
          <div className=" mr-2 h-[50%] w-[100%] bg-purple-600  text-[250px]">
            <p className="pl-[35%]">T</p>
          </div>
        )}

        {props.chat.chatInfo && (
          <div className="flex flex-row items-center justify-start pl-5 pt-5">
            <InfoIcon/>
            <p className="ml-5  font-bold">{props.chat.chatInfo}</p>
          </div>
        )}
        <div className="flex flex-row h-[40px] w-[100%] pl-5  items-center justify-between mt-2 pr-5">
          <VolumeOnIcon/>
          <div className="flex flex-row w-[80%] ml-5">
          <label className="text-lg">Notifications</label>
          </div>
         
          <Switch chat={props.chat} />
        </div>
      </div>
    </div>
  );
}
