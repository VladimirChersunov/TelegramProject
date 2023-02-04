import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";
import { useRef, useState, useEffect } from "react";

export function MainChat() {
  const chatContainer = useRef();
  const chatInput = useRef();
  const [height, setHeight] = useState(0)
  const [height2, setHeight2] = useState(0)

  const handleInputChange = (event) => {
    event.target.style.height = "auto";    
    event.target.style.height = event.target.scrollHeight + "px";
  };
  useEffect(() => {
    setHeight(chatContainer.current.clientHeight)
    console.log(height)
    setHeight2(chatInput.current.clientHeight)
    console.log(height2)
    setH(500-height2)
    console.log(chatHeight)
  })
 


const [chatHeight, setH] = useState("80%");


  return (
    <div className="flex flex-col h-[100%]" ref={chatContainer}>
      <div className={`h-[${chatHeight}] mt-2 bg-skin-fill`} >
        <div className="w-[100%] h-[100%] flex flex-col ml-auto mr-auto overflow-auto overflow-x-hidden">
          <MessageIn />
          <MessageOut />
          <MessageIn />
          <MessageOut />
          <MessageIn />
          <MessageOut />
          <MessageIn />
          <MessageOut />
        </div>
      </div>

      <div className=" bg-white w-[100%] h-[60px]">
        <div className="flex flex-row w-[60%] h-[100%] m-auto justify-center ">
          <div className="flex flex-row max-h-fit w-[600px] items-stretch rounded-lg border border-black ">
            <div className="w-[50px]">
              <button className="text-4xl">&#9786;</button>
            </div>

            <div className="w-[500px]">
              <textarea
              ref={chatInput}
                onChange={handleInputChange}
                className="w-[100%] h-[30px]  mt-3 text-xl rounded-lg outline-none pl-2 resize-none"
                MaxLength="200"
                contenteditable="true"
                placeholder="Message..."
              />
            </div>

            <div className="ml-2 mt-1">
              <button className="text-4xl">&#128206;</button>
            </div>
            <div className="ml-3">
              <button className="text-5xl">&#11162;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
