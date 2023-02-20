import { PeopleIcon } from "../Icons/PeopleIcon";
import { PeoplesIcon } from "../Icons/PeoplesIcon";
import { SpeakerIcon } from "../Icons/SpeakerIcon";

export function CreateMenu() {
  return (
    <ul
      className={`absolute mt-[-150px] ml-[-150px] block  group-hover:block shadow-2xl
        border border-slate-400 rounded-lg   w-[200px] select-none`}
    >
      <li
        onClick={() => {}}
        className="hover:bg-indigo-900 hover:cursor-pointer rounded-t-lg"
      >
        <div className="h-8 p-1 flex flex-row">
          <SpeakerIcon />
          <p className="font-bold ml-2">New Channel</p>
        </div>
      </li>
      <li
        onClick={() => {}}
        className="hover:bg-indigo-900 hover:cursor-pointer"
      >
        <div className="h-8 p-1 flex flex-row">
          <PeoplesIcon />
          <p className="font-bold ml-2">New Group</p>
        </div>
      </li>

      <li
        onClick={() => {}}
        className="hover:bg-indigo-900 hover:cursor-pointer rounded-b-lg"
      >
        <div className="h-8 p-1 flex flex-row">
          <PeopleIcon />
          <p className="font-bold ml-2">New Message</p>
        </div>
      </li>
    </ul>
  );
}
