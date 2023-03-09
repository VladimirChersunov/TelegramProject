import { useState, useEffect, useRef } from "react";
import { Hamburger } from "../Icons/Hamburger";
import { LeftMenu } from "./LeftMenu";

export function MenuButton(props) {

  
  const refLeftMenu = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [open]);

  const handleClickOutside = (e) => {
    if (!refLeftMenu?.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div ref={refLeftMenu} className="p-1 mt-2">
      <div className="relative">
        <button
          onClick={() => {
            setOpen((visible) => !visible);
          }}
          className=" text-4xl w-[45px] h-[45px] 
           rounded-full  hover:bg-skin-button-accent-hover  flex items-center justify-center"
        >
         <Hamburger/>
        </button>

        {open && (
          <LeftMenu
            darkMode={props.darkMode}
            toggleDarkMode={props.toggleDarkMode}
            visibleAbout={props.visibleAbout}
            visibleBugReport={props.visibleBugReport}
            visibleSetting={props.visibleSetting}
            visibleContact={props.visibleContact}
          />
        )}
      </div>
    </div>
  );
}
