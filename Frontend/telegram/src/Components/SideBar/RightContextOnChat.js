import { useState } from "react";
import { Ahtung } from "../Icons/Ahtung";
import { FlagIcon } from "../Icons/FlagIcon";
import { RecicleIcon } from "../Icons/RecicleIcon";
import { VolumeMuteIcon } from "../Icons/VolumeMuteIcon";
import { VolumeOnIcon } from "../Icons/VolumeOnIcon";


export function ContextMenu(props) {
  const [myState, setMyState] = useState('initial state');

const handleOpenNewTab = () =>{
  console.log('new tab')
  const stateParam = encodeURIComponent(JSON.stringify(myState));
    window.open(`http://localhost:3000/main?state=${stateParam}`, '_blank');
}

  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50"
      style={{ position: "absolute", top: props.y, left: props.x }}
    >
      <ul className="rounded-lg ">
        <li
          onClick={handleOpenNewTab}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
         <Ahtung/>
          <p className="font-bold ml-2">Open in new tab</p>
        </li>
        <div className="h-[1px] bg-skin-fill-inverted dark:bg-skin-fill w-[80%] m-auto "/>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <Ahtung/>
          <p className="font-bold ml-2"> Mark as read</p>
        </li>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <VolumeMuteIcon />
          <p className="font-bold ml-2">  Mute</p>
        </li>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <VolumeOnIcon/>
          <p className="font-bold ml-2">   Unmute</p>
        </li>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
         <FlagIcon/>
          <p className="font-bold ml-2"> Report</p>
        </li>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2"
        >
          <RecicleIcon style={'h-5 w-5 stroke-red-600    fill-none '}/>
          <p className="font-bold ml-2">   Leave channel</p>
        </li>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2"
        >
          <RecicleIcon style={'h-5 w-5 stroke-red-600    fill-none '}/>
          <p className="font-bold ml-2">   Delete and exit</p>
        </li>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2 "
        >
          <RecicleIcon style={'h-5 w-5 stroke-red-600    fill-none '}/>
          <p className="font-bold ml-2">   Delete</p>
        </li>
       
      </ul>
    </div>
  );
}
