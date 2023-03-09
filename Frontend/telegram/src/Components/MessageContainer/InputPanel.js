import EmojiPicker, { Theme } from "emoji-picker-react";
import { useState, useEffect } from "react";
import { EnterIcon } from "../Icons/EnterIcon";
import { LinkIcon } from "../Icons/LinkIcon";
import { SmileIcon } from "../Icons/SmileIcon";

export function InputPanel(props) {
  
  const handleInputChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
    setMeassageText(event.target.value);
  };

  const [messageText, setMeassageText] = useState("");
  const [messages, setMessage] = useState([]);
  const [theme, setTheme] = useState("dark");
  const[visiblEmojiPicker, setvisiblEmojiPicker] = useState(false)
 
  useEffect(() => {
    if (props.darkMode) {
      setTheme((preevTheme) => "dark");
    } else {
      setTheme((preevTheme) => "light");
    }
  }, [props.darkMode]);

  const addNewMessage = (event) => {
    const newMessage = {
      ...messageText,
      id: Date.now(),
    };

    setMeassageText("");
  };

  useEffect(()=>{

  })

  const handleEmojiClick = () =>{
     setvisiblEmojiPicker((prevVisible)=>!visiblEmojiPicker)
  }

  return (
    <div className="w-[100%] relative   h-[60px] flex justify-center  ">
      <div className="flex flex-row  w-[70%] items-stretch rounded-lg border border-skin-border-base dark:border-skin-border-inverted">
        {visiblEmojiPicker && <div className="absolute bottom-[65px]">
          <EmojiPicker theme={`${theme}`} />
        </div>}
        <button className="mx-3" onClick={handleEmojiClick}>
          <SmileIcon />
        </button>

        <div className="w-[90%]">
          <textarea
            onChange={handleInputChange}
            value={messageText}
            className="w-[100%] h-[30px]  mt-3 text-xl rounded-lg outline-none pl-2 resize-none
               bg-skin-fill dark:bg-skin-fill-inverted"
            MaxLength="200"
            contenteditable="true"
            placeholder="Message..."
          />
        </div>

        <button className="">
          <LinkIcon />
        </button>

        <button className="mr-1" onClick={addNewMessage}>
          <EnterIcon style="w-9 h-9 stroke-skin-stroke-base dark:stroke-[#C6BDFF] fill-none"/>
        </button>
      </div>
    </div>
  );
}
