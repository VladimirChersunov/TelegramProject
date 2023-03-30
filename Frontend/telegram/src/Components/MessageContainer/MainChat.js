import { InputPanel } from "./InputPanel";
import { useState, useEffect, useRef } from "react";
import { getAllMessaages } from "../../Services/messageServices";
import { Message } from "./Message";

export function MainChat({ chat, changeThemes, darkMode, currentUser }) {
  const messagesEndRef = useRef(null);
  const myRef = useRef(null);
  const [dataMessages, setDataMessages] = useState({});
 

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { chatName, authorId, type } = chat;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dataMessages]);

  const refreshMessage = async () => {
    try {
      const allMessaages = await getAllMessaages(chatName, authorId, type);
      setDataMessages(allMessaages);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const height = window.innerHeight - 140; // 120px - это нужный вам отступ
    myRef.current.style.height = `${height}px`;
  }, []);

  useEffect(() => {
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
    getData();
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatName, authorId, type]);

  return (
    <div  className="flex flex-col h-screen max-w-full items-center">
      <div ref={myRef} className=" mt-2 flex flex-col  w-full overflow-x-hidden text-skin-base overflow-y-scroll scrollbar ">
     
        {dataMessages?.messages?.map((message) => (
          <Message
            chatName={chatName}
            message={message}
            key={message.id}
            currentUser={currentUser}
          />
        ))}
     
      </div>
<div ref={messagesEndRef}/>
<InputPanel
        darkMode={darkMode}
        currentUser={currentUser}
        chat={chat}
        refreshMessage={refreshMessage}
      />
</div>
     
   
  );
}
