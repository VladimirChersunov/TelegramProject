import { useState, useEffect } from "react";
import { Ahtung } from "../Icons/Ahtung";
import { FlagIcon } from "../Icons/FlagIcon";
import { NewTab } from "../Icons/NewTab";
import { RecicleIcon } from "../Icons/RecicleIcon";
import { VolumeMuteIcon } from "../Icons/VolumeMuteIcon";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";


export function ContextMenu({chat, x, y, handleMuted}) {
  const [myState, setMyState] = useState('initial state');
  const[chats, setChat] = useState(false)
  const[group, setGroup] = useState(false)
  const[channel, setChannel] = useState(false)
  const[mute, setMute] = useState(chat.muteStatus)
  

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


  
const handleOpenNewTab = () =>{
 
  const stateParam = encodeURIComponent(JSON.stringify(myState));
    window.open(`http://localhost:3000/main?state=${stateParam}`, '_blank');
}

  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg ">
        <li
          onClick={handleOpenNewTab}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
        <NewTab/>
          <p className="font-bold ml-2">Open in new tab</p>
        </li>
        <div className="h-[1px] bg-skin-fill-inverted dark:bg-skin-fill w-[80%] m-auto "/>
        <li
          
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <Ahtung/>
          <p className="font-bold ml-2"> Mark as read</p>
        </li>
        {!mute&&<li
         
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <VolumeMuteIcon />
          <p className="font-bold ml-2">  Mute</p>
        </li>}
       {mute&& <li
           
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <VolumeOnIcon/>
          <p className="font-bold ml-2">   Unmute</p>
        </li>}
        <li
         
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
         <FlagIcon/>
          <p className="font-bold ml-2"> Report</p>
        </li>
       {channel&& <li
         
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2"
        >
          <RecicleIcon styles={'h-5 w-5 stroke-red-600    fill-none '}/>
          <p className="font-bold ml-2">   Leave channel</p>
        </li>}
      {group&&<li
        
        className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
          flex-row text-skin-error  items-center text-sm pt-2 pb-2"
      >
        <RecicleIcon styles={'h-5 w-5 stroke-red-600    fill-none '}/>
        <p className="font-bold ml-2">   Delete and exit</p>
      </li>}
       {chats&& <li
         
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2 "
        >
          <RecicleIcon styles={'h-5 w-5 stroke-red-600    fill-none '}/>
          <p className="font-bold ml-2">   Delete</p>
        </li>}
       
      </ul>
    </div>
  );
}
