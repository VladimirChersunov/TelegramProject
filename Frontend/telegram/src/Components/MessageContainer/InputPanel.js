import Picker, { Theme } from "emoji-picker-react";
import { useState, useEffect } from "react";
import { createMessaage } from "../../Services/messageServices";
import { EnterIcon } from "../Icons/EnterIcon";
import { LinkIcon } from "../Icons/LinkIcon";
import { SmileIcon } from "../Icons/SmileIcon";

export function InputPanel({ darkMode, currentUser, chat, refreshMessage }) {
  const [data, setData] = useState(null);
  const [messageText, setMeassageText] = useState("");
  const [theme, setTheme] = useState("dark");
  const [visiblEmojiPicker, setvisiblEmojiPicker] = useState(false);

  useEffect(() => {
    if (darkMode) {
      setTheme((preevTheme) => "dark");
    } else {
      setTheme((preevTheme) => "light");
    }
  }, [darkMode]);

  const handleInputChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
    setMeassageText(event.target.value);
  };

  const addNewMessage = async (event) => {
    if (messageText.length <= 0) {
      return;
    }
    try {
      const dataMessage = await createMessaage(
        currentUser.id,
        chat.id,
        data,
        messageText
      );
    } catch (error) {
      console.log(error);
    } finally {
      refreshMessage();
    }
    setMeassageText("");
  };

  const handleEmojiClick = () => {
    setvisiblEmojiPicker((prevVisible) => !visiblEmojiPicker);
  };

  return (
    <div className=" w-[80%] h-[70px] flex flex-row items-center justify-center rounded-lg border border-skin-border-base dark:border-skin-border-inverted ">
      {visiblEmojiPicker && (
        <div className="absolute bottom-[65px]">
          <Picker pickerStyle={{ backgroundColor: "bg-skin-fill" }} />
        </div>
      )}
      <button className="mx-3" onClick={handleEmojiClick}>
        <SmileIcon />
      </button>

      <div className="w-[90%] flex items-center justify-center">
        <textarea
        rows={1}
          onChange={handleInputChange}
          value={messageText}
          className="w-full h-auto  text-xl rounded-lg outline-none  resize-none overflow-hidden
               bg-skin-fill dark:bg-skin-fill-inverted "
          maxLength="200"
          // contentEditable="true"
          // suppressContentEditableWarning={true}
          placeholder="Message..."
        />
      </div>

      <LinkIcon />

      <button className="mr-1" onClick={addNewMessage}>
        <EnterIcon style="w-9 h-9 stroke-skin-stroke-base dark:stroke-[#C6BDFF] fill-none" />
      </button>
    </div>
  );
}
