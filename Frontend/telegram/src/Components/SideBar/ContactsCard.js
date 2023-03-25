import { useState, useRef, useEffect } from "react";
import { ContactsContextMenu } from "../ContactsContextMenu";

export function ContactsCard({ contact, type }) {
  const contextRef = useRef();
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
    setContextMenuX(event.pageX);
    setContextMenuY(event.pageY);
  };

  const handleContactClick = (event) => {
    setShowContextMenu(false);
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleClickOutside, true);
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("contextmenu", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (!contextRef?.current?.contains(e.target)) {
      setShowContextMenu(false);
    }
  };

  return (
    <div
      ref={contextRef}
      onContextMenu={handleContextMenu}
      onClick={handleContactClick}
      className="flex flex-row my-1 w-[300px] h-[60px] cursor-pointer items-center mb-2  hover:bg-skin-button-accent-hover pl-2
       rounded-lg border-b border-skin-border-base dark:border-skin-border-inverted"
    >
      <div className="align-middle content-center items-center place-content-center p-1">
        {contact.photo ? (
          <img
            src={""}
            alt="logo"
            className="rounded-full  h-[50px] w-[50px]"
          />
        ) : (
          <div className="rounded-full   h-[40px] w-[40px] bg-purple-500 flex items-center justify-center select-none">
            <p className="text-2xl">
              {contact.userName[0] + contact.userName[1]}
            </p>
          </div>
        )}
      </div>

      {showContextMenu && (
        <ContactsContextMenu
          x={contextMenuX}
          y={contextMenuY}
          userName={contact.userName}
          type={type}
        />
      )}

      <p className="font-bold pl-2 text-xl cursor-pointer">
        {contact.userName}
      </p>
    </div>
  );
}
