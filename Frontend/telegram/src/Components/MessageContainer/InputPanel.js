import EmojiPicker, { Theme } from "emoji-picker-react";
import { useState, useEffect, useRef } from "react";
import { createMessaage } from "../../Services/messageServices";
import { EnterIcon } from "../Icons/EnterIcon";
import { LinkIcon } from "../Icons/LinkIcon";
import { SmileIcon } from "../Icons/SmileIcon";
import Modal from "react-modal";
import { CloseIcon } from "../Icons/CloseIcon";

export function InputPanel({
  darkMode,
  currentUser,
  chat,
  refreshMessage,
  refreshInputHeeight,
}) {
  
  const [data, setData] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [theme, setTheme] = useState("dark");
  const [showPicker, setShowPicker] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState(28);  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const textareaRef = useRef(null);
  const parentRef = useRef(null);
  const pickerRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      setTheme((prev) => "dark");
    } else {
      setTheme((prev) => "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (textareaRef.current && parentRef.current) {
      parentRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [textareaRef]);

  useEffect(() => {
    setShowPicker(false);
  }, [chat]);

  useEffect(() => {
    refreshInputHeeight(textareaHeight);
  }, [textareaHeight]);

  const handleInputChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
    setMessageText(event.target.value);
    if (textareaRef.current && parentRef.current) {
      parentRef.current.style.height = `${
        textareaRef.current.scrollHeight + 5
      }px`;
    }
    setTextareaHeight(event.target.scrollHeight);
  };

  const addNewMessage = async (event) => {
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
      setData(null);
      setMessageText("");
      setModalIsOpen(false);
      refreshMessage();
    }
  };

  const handleLinkIconClick = () => {
    fileInputRef.current.click();
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setModalIsOpen(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addNewMessage();
    }
  };

  const handleEmojiClick = (emojiData, event) => {
    setMessageText((prevInput) => prevInput + emojiData.emoji);
    setShowPicker((prevState) => !prevState);
  };

  return (
    <div
      ref={parentRef}
      className=" w-[80%] min-h-[70px] flex flex-row items-center  rounded-lg border border-skin-border-base dark:border-skin-border-inverted "
    >
      {showPicker && (
        <div ref={pickerRef} className={`absolute bottom-[72px] `}>
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            autoFocusSearch={false}
            theme={Theme.AUTO}
            emojiStyle="native"
          />
        </div>
      )}
      <button className="mx-3" onClick={() => setShowPicker((val) => !val)}>
        <SmileIcon />
      </button>

      <div className="w-[90%] flex items-center ">
        <textarea
          ref={textareaRef}
          rows={1}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          value={messageText}
          className="w-full h-auto  text-xl rounded-lg outline-none  resize-none overflow-hidden
               bg-skin-fill dark:bg-skin-fill-inverted "
          maxLength="500"
          placeholder="Type your message here..."
        />
      </div>

      <div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          hidden
          accept="image/*"
        />
        <button onClick={handleLinkIconClick}>
          <LinkIcon />
        </button>
      </div>

      <button className="mr-1" onClick={addNewMessage}>
        <EnterIcon styles="w-9 h-9 stroke-skin-stroke-base dark:stroke-[#C6BDFF] fill-none" />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#0c0221", // Добавьте это свойство
          },
        }}
        appElement={document.getElementById("root")}
        className="w-[500px] h-[300px] absolute  border border-skin-border-inverted bg-skin-fill-base rounded-lg"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0, 0, 0, 0.5)]  flex items-center justify-center "
        shouldCloseOnOverlayClick={false}
      >
        <div className="flex flex-col w-full h-full">
          <button
            onClick={handleModalClose}
            className="h-[40px] w-[40px] rounded-full ml-2 mt-2 hover:bg-skin-button-accent-hover flex items-center justify-center"
          >
            <CloseIcon
              style={
                "h-7 w-7 stroke-skin-stroke-inverted   fill-none dark:stroke-skin-stroke-base"
              }
            />
          </button>
          {data ? (
            <div className="flex items-center justify-center mb-2">
              <img
                src={data}
                alt="Selected file"
                className="w-[300px] h-[200px] object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-[200px] flex items-center justify-center">
              <div className="text-center text-skin-inverted text-2xl rounded-full border w-[100px] h-[100px] flex items-center justify-center">
                Photo
              </div>
            </div>
          )}
          <div className="w-full flex items-center justify-center">
            <button
              onClick={() => addNewMessage()}
              className="text-xl text-skin-inverted border w-[100px] rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
