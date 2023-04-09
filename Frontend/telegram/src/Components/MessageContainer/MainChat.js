import { InputPanel } from "./InputPanel";
import { useState, useEffect, useRef } from "react";
import { getAllMessaages, readMessaages } from "../../Services/messageServices";
import { Message } from "./Message";

export function MainChat({
  chat,
  darkMode,
  currentUser,
 
  currentChat,
}) {
 
  const messagesEndRef = useRef(null);
  const myRef = useRef(null);
  const [dataMessages, setDataMessages] = useState(null);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [inputHeight, setInputHeight] = useState(0);

  const admin = chat?.authorId === currentUser?.id;

  useEffect(() => {
    const getData = async () => {
      try {
        let allMessaages = null;
        if (chat.type === "Private") {
          allMessaages = await getAllMessaages(chat?.chatName, null, "Private");
        } else {
          allMessaages = await getAllMessaages(
            chat?.chatName,
            chat.authorId,
            chat?.type
          );
        }
        setDataMessages(allMessaages);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.type, chat?.chatName, chat?.authorId]);

  useEffect(() => {
    const markRead = async () => {
      await readMessaages(chat?.id, currentUser?.id);
    };
    const messageContainer = document.getElementById("message-container");
    messageContainer.scrollTop = messageContainer?.scrollHeight;
    markRead();
  }, [dataMessages, chat?.id, currentUser?.id]);

  const refreshMessage = async () => {
    try {
      let allMessaages = null;
      if (chat?.type === "Private") {
        allMessaages = await getAllMessaages(chat?.chatName, null, chat?.type);
      } else {
        allMessaages = await getAllMessaages(
          chat?.chatName,
          chat?.authorId,
          chat?.type
        );
      }
      setDataMessages(allMessaages);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };

  const refreshInputHeeight = (props) => {
    if (props >= 56) {
      setInputHeight(props - 56);
    }
  };

  useEffect(() => {
    const height = window.innerHeight - 140 - inputHeight;

    myRef.current.style.height = `${height}px`;
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowHeight, inputHeight]);

  return (
    <div
      className={`flex flex-col h-[${windowHeight} px] max-w-full items-center w-full`}
    >
      <div
        ref={myRef}
        id="message-container"
        className=" mt-2 flex flex-col  w-full overflow-x-hidden text-skin-base overflow-y-scroll scrollbar "
      >
        {dataMessages &&
          dataMessages?.messages?.map((message) => (
            <Message
              message={message}
              key={message?.id}
              currentUser={currentUser}
              chat={chat}
              refreshMessage={refreshMessage}             
              currentChat={currentChat}
            />
          ))}
      </div>
      <div ref={messagesEndRef} />
      {(!(chat?.type === "Channel") ||
        (admin && chat?.type === "Channel" && admin)) && (
        <InputPanel
          refreshInputHeeight={refreshInputHeeight}
          darkMode={darkMode}
          currentUser={currentUser}
          chat={chat}
          refreshMessage={refreshMessage}
        />
      )}
    </div>
  );
}
