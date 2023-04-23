import { InputPanel } from "./InputPanel";
import { useState, useEffect, useRef } from "react";
import {
  getOpenPrivateChat,
  getOpenPublicChat,
  readMessaages,
} from "../../Services/messageServices";
import { Message } from "./Message";


export function MainChat({ chat, darkMode, currentUser, currentChat, chats }) {
  const messagesEndRef = useRef(null);
  const myRef = useRef(null);
  const [dataMessages, setDataMessages] = useState(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [inputHeight, setInputHeight] = useState(0);
  const [replay, setReplay] = useState(null);
  const admin = chat?.authorId === currentUser?.id;
  const isChannel =
    !(chat?.type === "Channel") || (admin && chat?.type === "Channel" && admin);

  useEffect(() => {
    console.log("chat change");

    const getData = async () => {
      try {
        let allMessaages = null;
        if (chat.type === "Private") {
          const opponentId = chat?.members?.find((n) => n !== currentUser?.id);
          console.log(chat)
          allMessaages = await getOpenPrivateChat(opponentId);
        } else {
          allMessaages = await getOpenPublicChat(chat?.chatName, chat.authorId);
        }
        console.log(allMessaages);
        setDataMessages(allMessaages);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.type, chat?.chatName, chat?.authorId, chats]);

  useEffect(() => {
    const markRead = async () => {
      await readMessaages(chat?.id, currentUser?.id);
    };
    const messageContainer = document.getElementById("message-container");
    messageContainer.scrollTop = messageContainer?.scrollHeight;
    markRead();
  }, [dataMessages, chat?.id, currentUser?.id, chats]);

  const refreshMessage = async () => {
    try {
      let allMessaages = null;
      if (chat?.type === "Private") {
        const opponentId = chat?.members?.find((n) => n !== currentUser?.id);
        allMessaages = await getOpenPrivateChat(opponentId);
      } else {
        allMessaages = await getOpenPublicChat(chat?.chatName, chat.authorId);
      }
      setDataMessages(allMessaages);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };

  const getReplay = (props) => {
    setReplay(props);
  };

  const refreshInputHeeight = (props) => {
    if (props >= 56) {
      setInputHeight(props - 56);
    } else {
      setInputHeight(0);
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
      className={`flex  relative flex-col h-screen max-w-full items-center w-full`}
    >
      <div
        ref={myRef}
        id="message-container"
        className="mt-2 relative flex flex-col  w-full overflow-x-hidden text-skin-base overflow-y-scroll scrollbar z-10 sm:w-screen"
      >
        {dataMessages &&
          dataMessages?.messages?.map((message) => (
            <Message
              getReplay={getReplay}
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
      {isChannel && (
        <InputPanel
          replay={replay}
          refreshInputHeeight={refreshInputHeeight}
          darkMode={darkMode}
          currentUser={currentUser}
          chat={chat}
          refreshMessage={refreshMessage}
          setInputHeight={setInputHeight}
          setWindowHeight={setWindowHeight}
        />
      )}
    </div>
  );
}
