import { RadioElement } from "./RadioElement";

import { ChatCreateButton } from "./ChatCreateButton";


export function RadioChatList(props) {
  
  return (
    <div className="flex min-h-screen w-full flex-col items-top justify-center">
      <div className="w-[100%] h-[80%]" x-data="app">
    
        {props.chats.map((chat, index) => (
            <div key={index}>
            <RadioElement
            chat={chat}            
            currentChat={props.currentChat}
            handleMuted={props.handleMuted}
          /> 
           </div>
         
        ))}
      </div>
      <div className="h-[20%] w-[100%] bg-opacity-0 ">
        <ChatCreateButton 
         visibleStartPrivate={props. visibleStartPrivate}
         visibleAddNewChat={props. visibleAddNewChat}
         visibleAddMessage={props.visibleAddMessage}
         chatTypeCallback={props.chatTypeCallback}
         visibleAddmembers={props.visibleAddmembers}
         />
      </div>
    </div>
  );
}
