
import { useState, useEffect } from "react";
import { CloseIcon } from "../Icons/CloseIcon";
import { SearchIcon } from "../Icons/SearchIcon";

export function SerchInput() {
  const [valExist, setValExist] = useState(false);
  const [value, setValue] = useState("");

  useEffect(()=>{
if(value.length>0){
  setValExist(true)
}
else{
  setValExist(false)
}

  },[value] )

  return (
    <div className="w-full pr-2 mt-3">
      <div className=" flex flex-row items-center border border-skin-border-base dark:border-skin-border-inverted  rounded-3xl px-2 ">
        
        <SearchIcon/>
              
        <input
          className="h-[40px] w-[90%]  text-xl rounded-xl outline-none bg-skin-fill dark:bg-skin-fill-inverted ml-2"
          type="text"
          maxlength="20"
          placeholder="Search..."
         
          value={value}
          onChange={(e) => {
            setValExist(true);
            setValue(e.target.value);
          }}
        />
        <div className="w-10">
        {valExist && (
          <button
            onClick={() => {
              setValue("");
              
            }}
            className=" h-[35px] w-[35px] rounded-full hover:bg-skin-button-accent-hover flex items-center justify-center "
          >
           <CloseIcon/>
          </button>
        )}
        </div>
       
      </div>
    </div>
  );
}
