import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";
import { useState, useRef, useEffect } from "react";
import { MessageContextMenu } from "./MessageContextMenu";

export function Message({
  message,
  currentUser,
  chat,
  refreshMessage,
  refreshCallback,
  currentChat,
}) {
  
  const contextRef = useRef();
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [checkMessage, setCheckMessage] = useState(false);

  const isCurrentUser = message.author.id === currentUser.id;

  const showContext = (props) => {
    setShowContextMenu(props);
  };

  const checkedMessage = (props) => {
    setCheckMessage(props);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();

    setShowContextMenu(true);
    setContextMenuX(event.pageX);
    setContextMenuY(event.pageY);
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleClickOutside, true);
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("contextmenu", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (!contextRef?.current?.contains(e.target)) {
      setShowContextMenu(false);
    }
  };

 

  return (
    <div
      ref={contextRef}
      onContextMenu={handleContextMenu}
      className="w-[100%] "
    >
      {showContextMenu && (
        <MessageContextMenu
          x={contextMenuX}
          y={contextMenuY}
          message={message}
          chat={chat}
          checkedMessage={checkedMessage}
          currentUser={currentUser}
          refreshMessage={refreshMessage}
          showContext={showContext}
          refreshCallback={refreshCallback}
          currentChat={currentChat}
        />
      )}
      {isCurrentUser ? (
        <MessageOut message={message} checkMessage={checkMessage} />
      ) : (
        <MessageIn message={message} checkMessage={checkMessage} />
      )}
    </div>
  );
}
