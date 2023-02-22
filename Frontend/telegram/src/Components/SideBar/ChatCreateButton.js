import { useState, useEffect, useRef } from "react";
import { CreateMenu } from "./CreateMenu";
import {PenIcon} from "../Icons/PenIcon"
import { CloseIcon } from "../Icons/CloseIcon";
export function ChatCreateButton() {
  const [open, setOpen] = useState(false);
  const refCreateMenu = useRef(null);
  

  
  useEffect(() => {
    document.removeEventListener("click", handleClickOutsideCreateNenu, true);
   
    return () => {
     
      document.addEventListener("click", handleClickOutsideCreateNenu, true);
    };
  }, [open]);

  const handleClickOutsideCreateNenu = (e) => {
    if (!refCreateMenu?.current?.contains(e.target)) {
      setOpen( false);
    }
  };

  const toggleVisibleMenu = () => {
    setOpen((visible) => !visible);
  };

  return (
    <div ref={refCreateMenu} className="p-1 pt-3 ml-[80%]  relative select-none">
     
        <div
          onClick={toggleVisibleMenu}
          className="m-auto bg-skin-button-accent dark:bg-[#C6BDFF]   w-[50px] h-[50px] hover:cursor-pointer flex 
             rounded-full hover:bg-skin-button-accent-hover hover:shadow-xl  items-center justify-center dark:hover:bg-skin-button-accent-hover"
        >
          {open && <CloseIcon style={'h-7 w-7 stroke-skin-stroke-inverted   fill-none dark:stroke-skin-stroke-base'} />}
          {!open && <PenIcon style={'h-7 w-7 stroke-skin-stroke-inverted   fill-none dark:stroke-skin-stroke-base'} />}
        </div>

        {open && <CreateMenu />}
      </div>
    
  );
}
