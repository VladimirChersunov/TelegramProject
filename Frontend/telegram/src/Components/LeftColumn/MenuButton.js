import { useState, useEffect, useRef } from "react";
import { LeftMenu } from "./LeftMenu";

export function MenuButton(props) {
  const refLeftMenu = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.removeEventListener("click", handleClickOutside, true);
    console.log("del");
    return () => {
      console.log("add");
      document.addEventListener("click", handleClickOutside, true);
    };
  }, [open]);

  const handleClickOutside = (e) => {
    if (!refLeftMenu?.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div ref={refLeftMenu} className="p-1 pt-3">
      <div className="inline-block  relative">
        <div
          onClick={() => {
            setOpen((visible) => !visible);
          }}
          className="m-auto text-4xl w-[40px] h-[40px] hover:cursor-pointer
           rounded-full mb-1 hover:bg-indigo-900 hover:shadow-xl items-center text-center"
        >
          &#8801;
        </div>

        {open && <LeftMenu darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>}
      </div>
    </div>
  );
}
