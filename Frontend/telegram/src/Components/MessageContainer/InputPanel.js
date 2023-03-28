import Picker, { Theme } from "emoji-picker-react";
import { useState, useEffect } from "react";
import { createMessaage } from "../../Services/messageServices";
import { EnterIcon } from "../Icons/EnterIcon";
import { LinkIcon } from "../Icons/LinkIcon";
import { SmileIcon } from "../Icons/SmileIcon";

export function InputPanel({darkMode, currentUser, chat}) {

  const [data, setData] = useState(null);
  
  const handleInputChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
    setMeassageText(event.target.value);
  };

  const [messageText, setMeassageText] = useState("");  
  const [theme, setTheme] = useState("dark");
  const[visiblEmojiPicker, setvisiblEmojiPicker] = useState(false)
 
  useEffect(() => {
    if (darkMode) {
      setTheme((preevTheme) => "dark");
    } else {
      setTheme((preevTheme) => "light");
    }
  }, [darkMode]);

  const addNewMessage = async(event) => {
try{
const RESPONCE = await createMessaage(currentUser.id, chat.id, data, messageText)
console.log(RESPONCE)
}catch(error){
  console.log(error)
}finally{

}
     setMeassageText("");
  };

  useEffect(()=>{

  })

  const handleEmojiClick = () =>{
     setvisiblEmojiPicker((prevVisible)=>!visiblEmojiPicker)
  }

  return (
    <div className="w-full bottom-0 fixed z-1  h-[60px] flex items-center mb-5 ml-10">
      <div className="flex flex-row items-center justify-center  w-[50%] rounded-lg border border-skin-border-base dark:border-skin-border-inverted">
        {visiblEmojiPicker && <div className="absolute bottom-[65px]">
          <Picker pickerStyle={{ backgroundColor: 'bg-skin-fill' }} />
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
            maxLength="200"
            contentEditable="true"
            suppressContentEditableWarning={true}
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
