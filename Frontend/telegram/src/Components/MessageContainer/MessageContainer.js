import { MessageHeader } from "./MessageHeader";
import { MainChat } from "./MainChat";
import { useState, useEffect } from "react";

export function MessageContainer({
  chat,
  toggleRightColumn,
  changeThemes,
  darkMode,
  currentUser,
  currentChat,
}) {
  
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  return (
    <div
      className={`flex flex-col h-[${windowHeight} px]  overflow-hidden w-full`}
    >
      <MessageHeader
        chat={chat}
        toggleRightColumn={toggleRightColumn}   
        currentChat={currentChat}    
      />
      <MainChat
        chat={chat}
        changeThemes={changeThemes}
        darkMode={darkMode}
        currentUser={currentUser}
        currentChat={currentChat}
      />
    </div>
  );
}
