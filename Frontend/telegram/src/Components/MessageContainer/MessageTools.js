import { RightMenuButton } from "../InfoContainer/RightMenuButton";

// import { SearchIcon } from "../Icons/SearchIcon";

export function MessageTools({ clearMain, chat, visibleModalReport, currentChat }) {
  return (
    <div className="flex flex-row justify-end pr-5 min-w-[80px] z-50">
      {/* <button className="mx-4">
        <SearchIcon
          styles={
            "w-7 h-7 stroke-skin-stroke-base dark:stroke-[#C6BDFF] fill-none"
          }
        />
      </button> */}
      <RightMenuButton
        chat={chat}
        clearMain={clearMain}
        visibleModalReport={visibleModalReport}
        currentChat={currentChat}
      />
    </div>
  );
}
