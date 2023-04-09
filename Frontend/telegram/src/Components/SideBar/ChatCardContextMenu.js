import { BanIcon } from "../Icons/BanIcon";
import { PeopleIcon } from "../Icons/PeopleIcon";

export function ChatCardContextMenu({ x, y }) {
  const handleEnterChat = (event) => {
    event.stopPropagation();
    console.log(event);
  };

  return (
    <div
      className="w-[180px] text-skin-base dark:text-skin-inverted bg-skin-fill dark:bg-skin-fill-inverted
     text-lg  border border-skin-border-base dark:border-skin-border-inverted 
     rounded-lg z-50"
      style={{ position: "absolute", top: y, left: x }}
    >
      <ul className="rounded-lg ">
        <div>
          <li
            onClick={handleEnterChat}
            id="menu-item"
            className=" hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
         flex-row  items-center text-sm pt-2 pb-2"
          >
            <PeopleIcon />
            <p className="font-bold ml-2">Add to contacts</p>
          </li>
        </div>

        <li
          id="menu-item"
          onClick={handleEnterChat}
          className="menu-item hover:cursor-pointer hover:bg-skin-button-accent-hover rounded-t-lg pl-2  flex
         flex-row  items-center text-sm pt-2 pb-2"
        >
          <BanIcon />
          <p className="font-bold ml-2 text-skin-error">Add to black list</p>
        </li>
      </ul>
    </div>
  );
}
