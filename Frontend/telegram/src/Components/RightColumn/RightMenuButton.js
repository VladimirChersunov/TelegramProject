import { useState, useEffect, useRef } from "react";

import { RightMenu } from "./RightMenu";

export function RightMenuButton() {
  const [open, setOpen] = useState(false);
  const refRightMenu = useRef(null);

  //следим за изменением стейта open и добавляем или удаляем обработчик
  useEffect(() => {
    document.removeEventListener("click", handleClickOutsideRightMenu, true);
    console.log("del");
    return () => {
      console.log("add");
      document.addEventListener("click", handleClickOutsideRightMenu, true);
    };
  }, [open]);

  const handleClickOutsideRightMenu = (e) => {
    if (!refRightMenu?.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  const toggleVisibleRightMenu = () => {
    setOpen((visible) => !visible);
  };

  return (
    <div
      ref={refRightMenu}
      className="inline-block  relative hover:cursor-pointer my-auto"
    >
      <div onClick={toggleVisibleRightMenu} className="">
        &#x22EE;
      </div>

      {open && <RightMenu />}
    </div>
  );
}
