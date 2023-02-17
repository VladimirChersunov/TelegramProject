import { SearchIcon } from "./SerchIcon";
import { useState } from "react";

export function SerchInput() {
  const [valExist, setValExist] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full pr-2 mt-3">
      <div className=" flex flex-row  border  rounded-3xl pr-1">
        <SearchIcon />
        <input
          className="h-[40px] w-[85%]  text-xl rounded-xl outline-none bg-skin-fill dark:bg-[#0C0221] "
          placeholder="Search..."
          type="text"
          value={value}
          onChange={(e) => {
            setValExist(true);
            setValue(e.target.value);
          }}
        />
        {valExist && (
          <button
            onClick={() => {
              setValue("");
              setValExist(false);
            }}
            className="mt-[1px] mb-[1px] h-[40px] w-[40px] rounded-full "
          >
            &#10006;
          </button>
        )}
      </div>
    </div>
  );
}
