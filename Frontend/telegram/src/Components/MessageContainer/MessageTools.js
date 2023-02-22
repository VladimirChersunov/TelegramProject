import { PinIcon } from "../Icons/PinIcon";
import { RightMenuButton } from "../InfoContainer/RightMenuButton";
import { useState, useEffect } from "react";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { CameraIcon } from "../Icons/CameraIcon";
import { SearchIcon } from "../Icons/SearchIcon";

export function MessageTools(props) {
  const [group, setGroup] = useState(false);

  const [chat, setChat] = useState(false);
  console.log();
  useEffect(() => {
    if (props.chat.type === "channel") {
      setGroup((prevGroup) => false);
      setChat((prevChat) => false);
    }
    if (props.chat.type === "group") {
      setGroup((prevGroup) => true);
      setChat((prevChat) => false);
    }
    if (props.chat.type === "chat") {
      setChat((prevChat) => true);
      setGroup((prevGroup) => false);
    }
  }, [props.chat.type]);

  return (
    <div className="flex flex-row justify-end pr-5 w-1/4">
      {group && (
        <button className="text-5xl ml-6">
          <PinIcon />
        </button>
      )}
      {chat && (
        <button className="text-5xl ml-6">
          <PhoneIcon />
        </button>
      )}
      {chat && (
        <button className="text-3xl ml-6">
          <CameraIcon />
        </button>
      )}
      <button className="mx-6">
        <SearchIcon
          style={
            "w-7 h-7 stroke-skin-stroke-base dark:stroke-[#C6BDFF] fill-none"
          }
        />
      </button>
      <RightMenuButton chat={props.chat}/>
    </div>
  );
}
