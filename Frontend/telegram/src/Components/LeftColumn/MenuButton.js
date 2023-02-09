import { useState, useEffect, useRef } from "react";
import Switch from "./Switch";

export function MenuButton() {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const [open, setOpen] = useState(false);
  const refLeftMenu = useRef(null);

  const handleClickOutside = (e) => {
   
    if(!refLeftMenu.current.contains(e.target)){
      console.log("click out")
      setOpen(false);
      document.removeEventListener("click", handleClickOutside, true);
    }else{
      
      console.log("click in");
    }

  }

  return (
    <div className="p-1 pt-3">
      <div  ref={refLeftMenu} className="inline-block  relative">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="m-auto text-4xl w-[40px] h-[40px] hover:cursor-pointer
           rounded-full pb-[5px] hover:bg-slate-200 hover:shadow-xl items-center text-center"
        >
          &#8801;
        </div>

        <ul
          id="leftMenu"         
         
          className={`absolute ${
            open ? "block" : "hidden"
          }   mt-1 group-hover:block shadow-2xl bg-white border border-slate-400 rounded-lg  w-[200px] `}
        >
          <li className="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
              &#9960;
              <p className="font-bold ml-2">Saved Messsages</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
              &#128100;
              <p className="font-bold ml-2">Contacts</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
              &#9881;
              <p className="font-bold ml-2">Setting</p>
            </div>
          </li>
          <li class="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
              &#127769;
              <p className="font-bold ml-2 mr-4">Night Mode</p>
              <Switch />
            </div>
          </li>
          <li class="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
              &#128028;
              <p className="font-bold ml-2">Report bug</p>
            </div>
          </li>
          <li class="hover:bg-gray-200 hover:cursor-pointer">
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
      </div>
    </div>
  );
}
