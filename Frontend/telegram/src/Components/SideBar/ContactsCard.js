import { useState, useRef, useEffect } from "react";
import { chatExist, createPrivate } from "../../Services/chatServices";
import { ContactsContextMenu } from "./ContactsContextMenu";
import { LastSeen } from "./LastSeen";
import { getAllMessaages } from "../../Services/messageServices";

export function ContactsCard({ contact, type, currentChat, contacts }) {
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

  const handleCloseContextMenu = () => {
    setShowContextMenu(false);
  };

  const handleContactClick = async () => {
    setShowContextMenu(false);
    const chatExisted = await chatExist(contact?.id);
    if (chatExisted) {
      const data = await getAllMessaages(contact?.userName, null, "Private");
      console.log("only enter");
      currentChat(data?.chat);
    } else {
      await createPrivate(contact?.userName);
      const data = await getAllMessaages(contact?.userName, null, "Private");
      console.log("create and enter");
      console.log(data?.chat);
      currentChat(data?.chat);
    }
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
       border-b border-skin-border-base dark:border-skin-border-inverted rounded-[4px]"
    >
      <div className="align-middle content-center items-center place-content-center p-1">
        {contact.photo ? (
          <img
            src={contact.photo}
            alt="logo"
            className="rounded-full  h-[50px] w-[50px]"
          />
        ) : (
          <div className="rounded-full   h-[40px] w-[40px] bg-purple-500 flex items-center justify-center select-none">
            <p className="text-xl">
              {contact.userName[0].toUpperCase() +
                contact.userName[1].toUpperCase()}
            </p>
          </div>
        )}
      </div>

      {showContextMenu && (
        <ContactsContextMenu
          x={contextMenuX}
          y={contextMenuY}
          contact={contact}
          type={type}
          handleCloseContextMenu={handleCloseContextMenu}
          contacts={contacts}
        />
      )}
      <div className="flex flex-col items-start ml-3">
        <p className="font-bold pl-2 text-xl cursor-pointer">
          {contact.userName}
        </p>

        <LastSeen lastOnline={contact.lastOnline} />
      </div>
    </div>
  );
}
