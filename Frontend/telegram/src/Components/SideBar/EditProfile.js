import { useState } from "react";
import { BackArrowIcon } from "../Icons/BackArrowIcon";

export function EditProfile({visibleEdit}) {

  const handleClickBack = () => {
    visibleEdit(false);
  };

  return (
    <div className="flex flex-col w-[350px] w-min-[350px]">
      <div className="flex flex-row items-center">
        <button
          className="ml-2 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
     justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
          
        </button>

        <label className="text-2xl mt-4 ml-2 select-none">Edit Profile</label>
      </div>
    </div>
  );
}
