import Switch from "./Switch";

export function LeftMenu(props) {
  return (
    <ul
      className={`absolute block mt-1 group-hover:block shadow-2xl bg-skin-fill dark:bg-[#0C0221]
       border border-skin-border-base   rounded-lg  w-[200px] `}
    >
      <li className="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#9960;
          <p className="font-bold ml-2">Saved Messsages</p>
        </div>
      </li>
      <li className="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#128100;
          <p className="font-bold ml-2">Contacts</p>
        </div>
      </li>
      <li className="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#9881;
          <p className="font-bold ml-2">Setting</p>
        </div>
      </li>
      <li class="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#127769;
          <p className="font-bold ml-2 mr-4">Night Mode</p>
          <Switch darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
        </div>
      </li>
      <li class="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#128028;
          <p className="font-bold ml-2">Report bug</p>
        </div>
      </li>
      <li class="hover:bg-indigo-900 hover:cursor-pointer">
        <div className="h-8 p-1 flex flex-row">
          &#128712;
          <p className="font-bold ml-2">About Us</p>
        </div>
      </li>
      <li class="">
        <div className="h-8 p-1 flex flex-row text-center w-[100%]">
          <p className="text-center w-[100%] ml-2 text-xs text-slate-400">
            MyTelegram rev.1.0
          </p>
        </div>
      </li>
    </ul>
  );
}
