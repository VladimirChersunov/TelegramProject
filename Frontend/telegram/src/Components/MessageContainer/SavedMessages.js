import { useState, useRef, useEffect } from "react";

import { SavedIcon } from "../Icons/SavedIcon";
import { ContextMenu } from "../SideBar/RightContextOnChat";

export function SavedMessages(props) {
  return (
    <div className="flex flex-row items-center select-none  p-2  border-b  pb-2 cursor-pointer
     hover:bg-skin-button-accent-hover w-[97%] m-auto">
      <div className="rounded-full bg-purple-500 w-[50px] h-[50px] flex items-center justify-center mr-3">
        <SavedIcon />
      </div>

      <div>
        <p className="text-lg mr-2">Saved Messages</p>
        <p className="text-md">Lorem ipsum </p>
      </div>
    </div>
  );
}
