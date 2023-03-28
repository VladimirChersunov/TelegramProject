import { RadioElement } from "./RadioElement";


import { ChatCreateButton } from "./ChatCreateButton";


export function RadioChatList(props) {

  
 
  
  return (
    <div className="flex max-h-screen w-full flex-col items-center  overflow-hidden ">
      <div className="w-full h-full overflow-auto overflow-y-scroll scrollbar mb-[65px]" x-data="app">
    
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
     
        <ChatCreateButton 
         visibleStartPrivate={props. visibleStartPrivate}
         visibleAddNewChat={props. visibleAddNewChat}
         visibleAddMessage={props.visibleAddMessage}
         chatTypeCallback={props.chatTypeCallback}
         visibleAddmembers={props.visibleAddmembers}
         />
    
    </div>
  );
}
