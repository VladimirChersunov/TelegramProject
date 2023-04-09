import { useState } from "react";
import { deleteMessage, pinnedMessaages } from "../../Services/messageServices";
import { Copy } from "../Icons/Copy";
import { FlagIcon } from "../Icons/FlagIcon";
import { Forward } from "../Icons/Forward";
import { RecicleIcon } from "../Icons/RecicleIcon";
import { Reply } from "../Icons/Reply";
import { SelectAll } from "../Icons/SelectAll";
import copy from "copy-to-clipboard";
import { PinIcon } from "../Icons/PinIcon";

export function MessageContextMenu({
  x,
  y,
  message,
  chat,
  currentUser,
  refreshMessage,
  showContext,
  checkedMessage,
 
  currentChat,
}) {
  const admin = currentUser.id === chat.authorId;
  const owner = message.author.id === currentUser.id;  
  const [check, setCheck] = useState(false);
 

  // console.log(admin);
  // console.log(message.author.id);

  const deletemessage = async () => {
    try {
      const data = await deleteMessage(message.id, message.author.id);
      console.log(data);
    } catch (error) {
      console.log(error.data);
    } finally {
      refreshMessage();
    }
  };

 
  

  const handlDeleteClick = () => {
    if (!owner) {
      if (admin) {
        deletemessage();
      }
      return;
    }
    deletemessage();
  };

  const handleCopy = () => {
    copy(message.text);
    showContext(false);
  };

  const handleChcked = () => {
    setCheck((prev) => !prev);
    checkedMessage(check);
  };

  const handlePinnedClick = async () => {
    const action = "Set";
    try {
      const data = await pinnedMessaages(action, message.id, chat.id);

      currentChat(data.chat);
    } catch (error) {
      console.log(error.data);
    } finally {
     
      refreshMessage();
      showContext(false);
    }
  };

  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50 select-none"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg ">
        <li
          className=" text-skin-muted rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2 select-none"
        >
          <Reply />
          <p className="font-bold ml-2">Reply</p>
        </li>

        <li
          onClick={handleChcked}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2 select-none"
        >
          <SelectAll />
          <p className="font-bold ml-2"> Select</p>
        </li>

        <li
          onClick={handlePinnedClick}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2 select-none"
        >
          <PinIcon />
          <p className="font-bold ml-2"> Pin message</p>
        </li>

        <li
          className=" text-skin-muted  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2 select-none"
        >
          <FlagIcon />
          <p className="font-bold ml-2"> Report</p>
        </li>
        <li
          className="   pl-2  flex text-skin-muted
           flex-row  items-center text-sm pt-2 pb-2 select-none"
        >
          <Forward />
          <p className="font-bold ml-2"> Forward</p>
        </li>
        <li
          onClick={handleCopy}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2 select-none"
        >
          <Copy />
          <p className="font-bold ml-2"> Copy text</p>
        </li>
        {(owner || admin) && (
          <li
            onClick={handlDeleteClick}
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
          flex-row text-skin-error  items-center text-sm pt-2 pb-2 select-none "
          >
            <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none "} />
            <p className="font-bold ml-2"> Delete</p>
          </li>
        )}
      </ul>
    </div>
  );
}
