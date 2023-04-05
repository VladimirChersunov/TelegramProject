import { InputPanel } from "./InputPanel";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
  createRef,
} from "react";
import { getAllMessaages } from "../../Services/messageServices";
import { Message } from "./Message";

export function MainChat({
  chat,
  darkMode,
  currentUser,
  refreshCallback,
  currentChat,
  setCurrentRef,
}) {
  //console.log(chat)
  const messagesEndRef = useRef(null);
  const myRef = useRef(null);
  const [dataMessages, setDataMessages] = useState(null);
  const [members, setMembers] = useState(null);
  const [messages, setMessages] = useState(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputHeight, setInputHeight] = useState(0);
  const[chats, setChat] = useState(false)
  const[group, setGroup] = useState(false)
  const[channel, setChannel] = useState(false)

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

  const admin = authorId===currentUser.id
    

  useEffect(() => {
    if(type==='Private'){
      setChat(true)
      setGroup(false)
      setChannel(false)
    }
    if(type==='Group'){
      setChat(false)
      setGroup(true)
      setChannel(false)
    }
    if(type==='Channel'){
      setChat(false)
      setGroup(false)
      setChannel(true)
    }
    getData();
  }, [type]);

  useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    messageContainer.scrollTop = messageContainer.scrollHeight;
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
  }, [window.innerHeight, inputHeight]);

  useEffect(() => {
    getData();
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatName, authorId, type]);

  
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
          dataMessages.messages.map((message, index) => (
            <Message
            
              message={message}
              key={message.id}
              currentUser={currentUser}
              chat={chat}
              refreshMessage={refreshMessage}
              refreshCallback={refreshCallback}
              currentChat={currentChat}
              
            />
          ))}
      </div>
      <div ref={messagesEndRef} />
     {(!channel || admin && channel && admin) && <InputPanel
        refreshInputHeeight={refreshInputHeeight}
        darkMode={darkMode}
        currentUser={currentUser}
        chat={chat}
        refreshMessage={refreshMessage}
      />}
    </div>
  );
}
