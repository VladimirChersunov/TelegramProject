import { RadioElement } from "./RadioElement";

import { ChatCreateButton } from "./ChatCreateButton";
import { useState } from "react";

export function RadioChatList(props) {
  const [closeContext, setCloseContext] = useState(false);

  const handleCloseContext = (event) => {
    //console.log(event)
    setCloseContext(false);
  };
 // console.log(props?.chats);

  return (
    <div className="flex max-h-screen w-full flex-col items-center  overflow-hidden sm:w-screen">
      <div
        onScroll={handleCloseContext}
        className="w-full h-screen overflow-auto overflow-y-scroll scrollbar"
        x-data="app"
      >
       {props?.chats
  ?.sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime))
  .map((chat, index) => (
    <div key={index}>
      <RadioElement
        visibleModalReport={props.visibleModalReport}
        currentUser={props?.currentUser}
        chat={chat}   
        clearMain={props?.clearMain}         
        currentChat={props?.currentChat}
        handleMuted={props?.handleMuted}
        visibleSide={props.visibleSide}
        visibleMain={props.visibleMain}
        isSmallWidth={props.isSmallWidth}
        closeContext={closeContext}
        handleCloseContext={handleCloseContext}
      /> 
    </div>         
))}

      </div>

      <ChatCreateButton
        currentChat={props.currentChat}
        visibleStartPrivate={props.visibleStartPrivate}
        visibleAddNewChat={props.visibleAddNewChat}
        visibleAddMessage={props.visibleAddMessage}
        chatTypeCallback={props.chatTypeCallback}
        visibleAddmembers={props.visibleAddmembers}
      />
    </div>
  );
}
