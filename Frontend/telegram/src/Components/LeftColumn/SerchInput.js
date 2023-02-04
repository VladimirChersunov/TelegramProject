import { SerchCleanButton } from "./SearchClearButton";
import { SearchIcon } from "./SerchIcon";

export function SerchInput() {
  return (
    <div className="w-full pr-2 mt-3">
      <div className=" flex flex-row  border border-skin-border-base rounded-3xl pr-1">
        <SearchIcon />
        <input
          className="h-[40px] w-[85%]  text-xl border-t border-b outline-none"
          placeholder="Search..."
        />
        <SerchCleanButton />
      </div>
    </div>
  );
}
