import { useState } from "react";
export function InputPanel() {
  const handleInputChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
    setMeassageText(event.target.value);
  };

  const [messageText, setMeassageText] = useState("");
  const [messages, setMessage] = useState([]);
  

  const addNewMessage = (event) => {
    const newMessage = {
     ...messageText, id:Date.now()
    };
   
    setMeassageText("");
  };

  return (
    <div className="w-[100%]  h-[60px]">
      <div className="flex flex-row w-[60%] h-[100%] m-auto justify-center ">
        <div className="flex flex-row max-h-fit w-[600px] items-stretch rounded-lg border  ">
          <div className="w-[50px]">
            <button className="text-4xl">&#9786;</button>
          </div>

          <div className="w-[500px]">
            <textarea
              onChange={handleInputChange}
              value={messageText}
              className="w-[100%] h-[30px]  mt-3 text-xl rounded-lg outline-none pl-2 resize-none bg-skin-fill dark:bg-[#0C0221]"
              MaxLength="200"
              contenteditable="true"
              placeholder="Message..."
            />
          </div>

          <div className="ml-2 mt-1">
            <button className="text-4xl">&#128206;</button>
          </div>
          <div className="ml-3">
            <button className="text-5xl" onClick={addNewMessage}>
              &#11162;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
