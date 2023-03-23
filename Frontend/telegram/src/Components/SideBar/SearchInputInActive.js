import { SearchIcon } from "../Icons/SearchIcon";

export function SerchInputInActive({ visibleSearchWindow }) {
  const handleSerchWindow = () => {
    visibleSearchWindow(true);
  };

  return (
    <div className="w-full pr-2 mt-3">
      <div className=" flex flex-row items-center border border-skin-border-base dark:border-skin-border-inverted  rounded-3xl px-2 ">
        <SearchIcon />

        <input
          className="h-[40px] w-[90%]  text-xl rounded-xl outline-none bg-skin-fill dark:bg-skin-fill-inverted ml-2"
          type="text"
          placeholder="Search..."
          onClick={handleSerchWindow}
        />
      </div>
    </div>
  );
}
