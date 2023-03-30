import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";
import { useState, useRef, useEffect } from "react";
import { MessageContextMenu } from "./MessageContextMenu";
import { getUserById, getUserByUsername } from "../../Services/userServices";

export function Message({ message, currentUser, chatName }) {
  const [inMessage, setInMessage] = useState(false);
  const [outMessage, setOutMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (currentUser.id === message.userId) {
      setOutMessage(true);
      setInMessage(false);
    } else {
      setInMessage(true);
      setOutMessage(false);
    }
    const getData = async () => {
      try {       
        const user = await getUserById(message.userId);
       
        setOpponent(user);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [message]);

  const contextRef = useRef();
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [opponent, setOpponent] = useState({});

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
        <MessageContextMenu x={contextMenuX} y={contextMenuY}>
          <div onClick={() => alert(`Copy `)}>Open in new tab</div>
          <div onClick={() => alert(`Paste `)}>Mark as read</div>
          <div onClick={() => alert(`Paste `)}>Mute</div>
          <div onClick={() => alert(`Paste `)}>Unmute</div>
          <div onClick={() => alert(`Paste `)}>Report</div>
          <div onClick={() => alert(`Paste `)}>Delete and exit</div>
        </MessageContextMenu>
      )}

      {inMessage && <MessageIn message={message} opponent={opponent} />}
      {outMessage && <MessageOut message={message} opponent={opponent} />}
    </div>
  );
}
