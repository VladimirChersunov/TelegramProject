import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";
import { useState, useRef, useEffect } from "react";
import { MessageContextMenu } from "./MessageContextMenu";

export function Message({
  message,
  currentUser,
  chat,
  refreshMessage, 
  currentChat,
  getReplay
}) {
  
  const contextRef = useRef();
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [checkMessage, setCheckMessage] = useState(false);
  const isCurrentUser = message.author.id === currentUser.id;
 // const isAdmin = message.author.id === 745;
  // const screenWidth = window.innerWidth;
  // const screenHeight = window.innerHeight;  
  // const [posX, setPosX] = useState(0);
  // const [posY, setPosY] = useState(0);
  //const [coordinatesChecked, setCoordinatesChecked] = useState(false);


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

  // useEffect(() => {
   
  //   if (contextMenuX > screenWidth - 210) {
  //     setPosX(screenWidth - 210);
  //   }else{
  //     setPosX(contextMenuX)      
  //   }
  //   if (contextMenuY > screenHeight - 260) {
  //     setPosY(screenHeight - 260);
  //   }else{
  //     setPosY(contextMenuY);
  //   }

  //   if(contextMenuY > screenHeight - 250 && contextMenuX > screenWidth - 200){
  //     setPosX(screenWidth - 200);
  //     setPosY(screenHeight - 250);
  //   }

  //   setCoordinatesChecked(true); 
  // }, [contextMenuX,contextMenuY,screenHeight,screenWidth]);

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
      className={`w-[100%] relative  sm:w-screen  `}
    >
     {showContextMenu&& <div className="absolute bg-skin-button-accent-hover w-full h-full opacity-40"></div>}
      { showContextMenu  &&  (
        <MessageContextMenu
          x={contextMenuX}
          y={contextMenuY}
          message={message}
          chat={chat}
          checkedMessage={checkedMessage}
          currentUser={currentUser}
          refreshMessage={refreshMessage}
          showContext={showContext}         
          currentChat={currentChat}
          getReplay={getReplay}
        />
      )}
      {isCurrentUser ? (
        <MessageOut message={message} checkMessage={checkMessage} currentUser={currentUser}/>
      ) : (
        <MessageIn message={message} checkMessage={checkMessage} />
      )}
    </div>
  );
}
