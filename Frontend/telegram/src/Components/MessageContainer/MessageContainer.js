import { MessageHeader } from "./MessageHeader";
import { MainChat } from "./MainChat";
import { useState, useEffect } from "react";
import { getChatById } from "../../Services/chatServices";

export function MessageContainer({
  chat,
  toggleRightColumn,
  changeThemes,
  darkMode,
  currentUser,
  currentChat,
}) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [refresh, setRefresh] = useState(true);
  const [newChat, setNewChat] = useState(chat);
  const [messageRef, setMessageRef] = useState(null);

  const refreshCallback = (props) => {
    setRefresh(props);
  };

  const setCurrentRef = (props) => {
    setMessageRef(props);
  };

  const refreshChat = async () => {
    const data = await getChatById(chat.id);
    setNewChat(data);
  };

  useEffect(() => {
    if (refresh) {
      refreshChat();
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //console.log(chat);

  return (
    <div
      className={`flex flex-col h-[${windowHeight} px]  overflow-hidden w-full`}
    >
      <MessageHeader
        chat={chat}
        toggleRightColumn={toggleRightColumn}
        currentChat={currentChat}
        messageRef={messageRef}
      />
      <MainChat
      
        refreshCallback={refreshCallback}
        chat={chat}
        changeThemes={changeThemes}
        darkMode={darkMode}
        currentUser={currentUser}
        currentChat={currentChat}
      />
    </div>
  );
}
