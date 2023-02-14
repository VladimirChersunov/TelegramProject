import { LeftHeader } from "./LeftHeader";
import { RadioChatList } from "./RadioChatList";

export function LeftColumn(props) {
  return (
    <div
      className={`h-screen w-1/4 flex flex-col border-r border-skin-border-base border-solid min-w-[200px]`}
    >
      <LeftHeader />
      <RadioChatList chats={props.chats} currentChat={props.currentChat} />
    </div>
  );
}
