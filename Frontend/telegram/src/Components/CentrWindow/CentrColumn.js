import React from "react";
import { CentralHeader } from "./CentralHeader";
import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";
import { useEffect, useState, useRef } from "react";

export function CentrColumn() {
  const chatContainer = useRef();
  const chatInput = useRef();
  const windowInnerHeight = document.documentElement.clientHeight;

  const [chatHeight, setH] = useState(`${windowInnerHeight - 50}`);
  const [chatH, setChat] = useState(0);
  const [inputH, setInput] = useState(0);
  
  

 

  useEffect(() => {
     setChat(chatHeight*0.3)
      
  });

  
  console.log("высота экрана "+windowInnerHeight);
  console.log("большое окно " + chatHeight);
  console.log("окно чата " +chatH);

  return (
    <div className="w-3/4 max-h-screen ">
      <CentralHeader />
      <div className={`h-[80%]`} ref={chatContainer}>
        <div className={`mt-0 h-[20%]`}>
          <MessageIn />
          <MessageOut />
          <MessageIn />
          <MessageIn />
          <MessageOut />
          <MessageIn />
        </div>

        <div className="flex flex-row  w-[600px] mt-1 rounded-lg border border-black ">
          <button className="w-[50px] text-4xl">&#9786;</button>
          <div
            ref={chatInput}
            className="w-[500px] h-[30px]  mt-3 text-xl rounded-lg outline-none pl-2 resize-none"
            MaxLength="200"
            contenteditable="true"           
          />
          <button className="text-4xl ml-2 mt-1">&#128206;</button>
          <button className="ml-3 text-5xl">&#11162;</button>
        </div>
      </div>
    </div>
  );
}
