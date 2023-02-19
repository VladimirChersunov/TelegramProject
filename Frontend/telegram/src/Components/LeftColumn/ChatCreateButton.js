import { useState, useEffect, useRef } from "react";
import { CreateMenu } from "./CreateMenu";
import {PenIcon} from "./../Icons/PenIcon"
import { CloseIcon } from "../Icons/CloseIcon";
export function ChatCreateButton() {
  const [open, setOpen] = useState(false);
  const refCreateMenu = useRef(null);

  //следим за изменением стейта open и добавляем или удаляем обработчик
  useEffect(() => {
    document.removeEventListener("click", handleClickOutsideCreateNenu, true);
    console.log("del");
    return () => {
      console.log("add");
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
    <div ref={refCreateMenu} className="p-1 pt-3 ml-[80%]">
      <div className="inline-block  relative select-none">
        <div
          onClick={toggleVisibleMenu}
          className="m-auto bg-skin-button-accent dark:bg-[#C6BDFF]   w-[50px] h-[50px] hover:cursor-pointer pt-2
             rounded-full hover:bg-skin-button-accent-hover hover:shadow-xl  items-center"
        >
          {open && <CloseIcon/>}
          {!open && <PenIcon stroke={"stroke-skin-stroke-inverted"} height={50} width={50}/>}
        </div>

        {open && <CreateMenu />}
      </div>
    </div>
  );
}
