import { ChatList } from "./ChatList";
import { LeftHeader } from "./LeftHeader";

export function LeftColumn() {
  return (
    <div
      className={`h-screen w-1/4 flex flex-col border-r border-skin-border-base border-solid `}
    >
      <LeftHeader />
      <ChatList />
    </div>
  );
}
