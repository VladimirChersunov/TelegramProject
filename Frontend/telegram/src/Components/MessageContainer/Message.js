import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";
import { useState, useRef, useEffect } from "react";
import { MessageContextMenu } from "./MessageContextMenu";


export function Message(props) {
  const contextRef = useRef()
const message = props.message
const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
const[messageType, setMessageType] = useState(true)

const handleContextMenu = (event) => {
  event.preventDefault();
 

  setShowContextMenu(true);
  setContextMenuX(event.pageX);
  setContextMenuY(event.pageY);
}

useEffect(() => {
  
  document.addEventListener('contextmenu', handleClickOutside,true);
  document.addEventListener("click", handleClickOutside, true);
 
  return () => {
    document.removeEventListener("click", handleClickOutside, true);
    document.removeEventListener('contextmenu', handleClickOutside,true);
   
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
    className="w-[100%] ">
     
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

     <MessageIn
            message={{
              id: 1,
              author: "Obi-Wan Kenobi",
              authorImage: "T",
              sendTime: "00:00",
              data: 'text',
              sendStatus: "Delivered",
            }}
          />
         
          <MessageOut
            message={{
              id: 2,
              author: "Anakin",
              authorImage: "T",
              sendTime: "00:00",
              data: 'text',
              sendStatus: "Seen at 12:46",
            }}
          />
    </div>
  );
}
