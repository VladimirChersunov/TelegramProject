import { InputPanel } from "./InputPanel";
import { useState, useEffect, useRef } from "react";
import { getAllMessaages } from "../../Services/messageServices";
import { Message } from "./Message";

export function MainChat({ chat, changeThemes, darkMode, currentUser }) {
  const messagesEndRef = useRef(null);
  const myRef = useRef(null);
  const [dataMessages, setDataMessages] = useState(null);
  const [members, setMembers] = useState(null);
  const [messages, setMessages] = useState(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputHeight, setInputHeight] = useState(0);

  const { chatName, authorId, type } = chat;

  const getData = async () => {
    try {
      const allMessaages = await getAllMessaages(chatName, authorId, type);
      setDataMessages(allMessaages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dataMessages]);

  const refreshMessage = async () => {
    try {
      const allMessaages = await getAllMessaages(chatName, authorId, type);
      setDataMessages(allMessaages);
      setMessages(allMessaages.messages);
      setMembers(allMessaages.members);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshInputHeeight = (props) => {
    if(props>=56){
      setInputHeight(props-56)
    }   
    console.log(props);
  };

  useEffect(() => {
    const height = window.innerHeight - 140 - inputHeight;
    console.log(height)
    myRef.current.style.height = `${height}px`;
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerHeight,inputHeight]);

  useEffect(() => {
    getData();
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatName, authorId, type]);

  return (
    <div
      className={`flex flex-col h-[${windowHeight} px] max-w-full items-center`}
    >
      <div
        ref={myRef}
        className=" mt-2 flex flex-col  w-full overflow-x-hidden text-skin-base overflow-y-scroll scrollbar "
      >
        {dataMessages &&
          dataMessages.messages.map((message) => (
            <Message
              message={message}
              key={message.id}
              currentUser={currentUser}
            />
          ))}
      </div>
      <div ref={messagesEndRef} />
      <InputPanel
      refreshInputHeeight={refreshInputHeeight}
        darkMode={darkMode}
        currentUser={currentUser}
        chat={chat}
        refreshMessage={refreshMessage}
      />
    </div>
  );
}
