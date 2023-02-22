import { LeftHeader } from "./LeftHeader";
import { RadioChatList } from "./RadioChatList";

export function LeftColumn(props) {
  return (
    <div
      className={`h-screen w-1/4 flex flex-col border-r border-skin-border-base dark:border-skin-border-inverted   border-solid min-w-[300px]`}
    >
      <LeftHeader
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      <RadioChatList chats={props.chats} currentChat={props.currentChat} />
    </div>
  );
}
