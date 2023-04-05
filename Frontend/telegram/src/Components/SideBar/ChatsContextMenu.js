import { enterPublic } from "../../Services/chatServices";
import { Ahtung } from "../Icons/Ahtung";
import { PeopleIcon } from "../Icons/PeopleIcon";
import { RecicleIcon } from "../Icons/RecicleIcon";

export function ChatsContextMenu({ x, y, type, chat }) {
  //console.log(chat)
  
  const handleEnterToChat = (event) => {
    console.log("click");
    event.stopPropagation();
    // try {
    //   const data =  enterPublic(chat.chatName);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error.data);
    // }
  };

  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
       text-lg  border border-skin-border-base dark:border-skin-border-inverted 
       rounded-lg z-50"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg w-full  h-max">
        <li
          onClick={() => console.log("Кликнули на элемент!")}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2 "
        >
          <PeopleIcon />
          <p className="font-bold ml-2">Enter to chat</p>
        </li>

        <li
         onClick={() => console.log("Кликнули на элемент!")}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover  pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <Ahtung />
          <p className="font-bold ml-2 text-skin-error">Add to black list</p>
        </li>

        <li
          onClick={() => console.log("Кликнули на элемент!")}
          className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-b-lg pl-2  flex
           flex-row  items-center text-sm pt-2 pb-2"
        >
          <RecicleIcon styles={"h-5 w-5 stroke-red-600    fill-none"} />
          <p className="font-bold ml-2 text-skin-error">Leave the chat</p>
        </li>
      </ul>
    </div>
  );
}
