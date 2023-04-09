import { RightMenuButton } from "../InfoContainer/RightMenuButton";


import { SearchIcon } from "../Icons/SearchIcon";

export function MessageTools(props) {
  

 
  return (
    <div className="flex flex-row justify-end pr-5 min-w-[80px]">
    
      <button className="mx-4">
        <SearchIcon
          styles={
            "w-7 h-7 stroke-skin-stroke-base dark:stroke-[#C6BDFF] fill-none"
          }
        />
      </button>
      <RightMenuButton chat={props?.chat} />
    </div>
  );
}
