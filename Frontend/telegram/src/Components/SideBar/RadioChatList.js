import { RadioElement } from "./RadioElement";

import { ChatCreateButton } from "./ChatCreateButton";

export function RadioChatList(props) {
  return (
    <div className="flex min-h-screen w-full flex-col items-top justify-center">
      <div className="w-[100%] h-[80%]" x-data="app">
        {props.chats.map((chat) => (
          <RadioElement
            chat={chat}
            key={chat.id}
            currentChat={props.currentChat}
          />
        ))}
      </div>
      <div className="h-[20%] w-[100%] bg-opacity-0 ">
        <ChatCreateButton />
      </div>
    </div>
  );
}
