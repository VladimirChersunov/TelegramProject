import { Ahtung } from "../Icons/Ahtung";
import { Copy } from "../Icons/Copy";
import { FlagIcon } from "../Icons/FlagIcon";
import { Forward } from "../Icons/Forward";
import { RecicleIcon } from "../Icons/RecicleIcon";
import { Reply } from "../Icons/Reply";
import { SelectAll } from "../Icons/SelectAll";


export function MessageContextMenu(props) {
  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50"
      style={{ position: "absolute", top: props.y, left: props.x }}
    >
      <ul className="rounded-lg ">
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
         <Reply/>
          <p className="font-bold ml-2">Reply</p>
        </li>
       
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <SelectAll/>
          <p className="font-bold ml-2"> Select</p>
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
           flex-row  items-center text-sm pt-2 pb-2"
        >
        <Forward/>
          <p className="font-bold ml-2"> Forward</p>
        </li>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
        <Copy/>
          <p className="font-bold ml-2"> Copy text</p>
        </li>
        <li
          onClick={props.onCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row text-skin-error  items-center text-sm pt-2 pb-2 "
        >
          <RecicleIcon styles={'h-5 w-5 stroke-red-600    fill-none '}/>
          <p className="font-bold ml-2">   Delete</p>
        </li>
       
      </ul>
    </div>
  );
}
