import { useState, useEffect } from "react";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";

import { RecicleIcon } from "../Icons/RecicleIcon";
import { FlagIcon } from "../Icons/FlagIcon";
import { VolumeMuteIcon } from "../Icons/VolumeMuteIcon";
import { Ahtung } from "../Icons/Ahtung";
import { SelectAll } from "../Icons/SelectAll";

export function RightMenu({chat}) {
  const [mute, setMute] = useState(chat.muteStatus);
  const[chats, setChat] = useState(false)
  const[group, setGroup] = useState(false)
  const[channel, setChannel] = useState(false)
  
  useEffect(()=>{
 
    if(chat.type==='chat'){
      
      setChat(true)
      setGroup(false)
      setChannel(false)
    }
    if(chat.type==='group'){
      
      setChat(false)
      setGroup(true)
      setChannel(false)
    }
    if(chat.type==='channel'){
    
      setChat(false)
      setGroup(false)
      setChannel(true)
    }
   
    },[])

  

  return (
    <ul
      className={`absolute mt-4  ml-[-180px] block  group-hover:block shadow-2xl  border border-skin-border-base
       dark:border-skin-border-inverted rounded-lg text-lg  w-[200px] bg-skin-fill dark:bg-skin-fill-inverted z-50 `}
    >
      {!mute && (
        <li
          onClick={() => {}}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2 p-1 flex flex-row  items-center"
        >
          <VolumeMuteIcon />
          <p className="font-bold ml-2">Mute</p>
        </li>
      )}
      {mute && (
        <li
          onClick={() => {}}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2 p-1 flex flex-row  items-center"
        >
          <VolumeOnIcon />
          <p className="font-bold ml-2">Unmute</p>
        </li>
      )}
      <li
        onClick={() => {}}
        className="hover:bg-skin-button-accent-hover hover:cursor-pointer pl-2 p-1 flex flex-row  items-center"
      >
       <SelectAll/>
        <p className="font-bold ml-2">Select message</p>
      </li>
      <li
        onClick={() => {}}
        className="hover:bg-skin-button-accent-hover hover:cursor-pointer pl-2 p-1 flex flex-row  items-center"
      >
        <FlagIcon />
        <p className="font-bold ml-2">Report</p>
      </li>

      <div className="w-[100%] flex justify-center">
        <div className="w-[80%] h-[1px] bg-skin-fill mt-2 "></div>
      </div>

      {channel&&<li
       
        className="hover:bg-skin-button-accent-hover hover:cursor-pointer text-skin-error rounded-b-lg pl-2 p-1 flex flex-row  items-center"
      >
        <RecicleIcon styles={'h-5 w-5 stroke-red-600    fill-none '}/>
        <p className="font-bold ml-2">Leave Channel</p>
      </li>}
     {group&& <li
       
        className="hover:bg-skin-button-accent-hover hover:cursor-pointer text-skin-error rounded-b-lg pl-2 p-1 flex flex-row  items-center"
      >
        <RecicleIcon styles={'h-5 w-5 stroke-red-600    fill-none '}/>
        <p className="font-bold ml-2">Delete and exit</p>
      </li>}
     {chats&& <li
        onClick={() => {}}
        className="hover:bg-skin-button-accent-hover hover:cursor-pointer text-skin-error rounded-b-lg pl-2 p-1 flex flex-row  items-center"
      >
        <RecicleIcon styles={'h-5 w-5 stroke-red-600    fill-none '}/>
        <p className="font-bold ml-2">Delete</p>
      </li>}
    </ul>
  );
}
