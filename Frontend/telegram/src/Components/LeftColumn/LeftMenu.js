import { PeopleIcon } from "../Icons/PeopleIcon";
import { SavedIcon } from "../Icons/SavedIcon";
import { SettingIcon } from "../Icons/SettingIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import { BugIcon } from "../Icons/BugIcon";
import { InfoIcon } from "../Icons/InfoIcon";
import Switch from "./Switch";

export function LeftMenu(props) {
  return (
    <ul
      className={`absolute block mt-1 group-hover:block shadow-2xl bg-skin-fill dark:bg-[#0C0221]
       border border-skin-border-base dark:border-[#C6BDFF]   rounded-lg  w-[200px] select-none`}
    >
      <li className="hover:bg-indigo-900 hover:cursor-pointer rounded-t-lg">
        <div className="h-8 p-1 flex flex-row">
          <SavedIcon />
          <p className="font-bold ml-2">Saved Messsages</p>
        </div>
      </li>
      <li className="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          <PeopleIcon />
          <p className="font-bold ml-2">Contacts</p>
        </div>
      </li>
      <li className="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          <SettingIcon />
          <p className="font-bold ml-2">Setting</p>
        </div>
      </li>
      <li class="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          <MoonIcon />
          <p className="font-bold ml-2 mr-4">Night Mode</p>
          <Switch
            darkMode={props.darkMode}
            toggleDarkMode={props.toggleDarkMode}
          />
        </div>
      </li>
      <li class="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          <BugIcon />
          <p className="font-bold ml-2">Report bug</p>
        </div>
      </li>
      <li class="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          <InfoIcon />
          <p className="font-bold ml-2">About Us</p>
        </div>
      </li>
      <li class="">
        <div className="h-8 p-1 flex flex-row text-center w-[100%]">
          <p className="text-center w-[100%] ml-2 text-xs text-slate-400">
            Cryptic rev.2.0
          </p>
        </div>
      </li>
    </ul>
  );
}
