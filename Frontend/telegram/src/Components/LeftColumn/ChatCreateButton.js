import { useState, useEffect, useRef } from "react";
import { CreateMenu } from "./CreateMenu";

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
      setOpen((open) => false);
    }
  };

  const toggleVisibleMenu = () => {
    setOpen((visible) => !visible);
  };

  return (
    <div ref={refCreateMenu} className="p-1 pt-3 ml-[80%]">
      <div className="inline-block  relative">
        <div
          onClick={toggleVisibleMenu}
          className="m-auto bg-blue-300 text-2xl w-[50px] h-[50px] hover:cursor-pointer pt-2
             rounded-full  hover:bg-blue-600 hover:shadow-xl hover:border hover:border-black items-center text-center"
        >
          {open && <p> &#10006;</p>}
          {!open && <p> &#128394;</p>}
        </div>

        {open && <CreateMenu />}
      </div>
    </div>
  );
}
