import { SearchIcon } from "./SerchIcon";
import { useState } from "react";

export function SerchInput() {
  const [valExist, setValExist] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full pr-2 mt-3">
      <div className=" flex flex-row  border border-skin-border-base rounded-3xl pr-1">
        <SearchIcon />
        <input
          className="h-[40px] w-[85%]  text-xl border-t border-b outline-none"
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
            className="mt-[1px] mb-[1px] h-[40px] w-[40px] rounded-full  bg-slate-400"
          >
            &#10006;
          </button>
        )}
      </div>
    </div>
  );
}
