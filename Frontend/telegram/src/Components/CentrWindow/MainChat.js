import { InputPanel } from "./InputPanel";
import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";

export function MainChat() {
  return (
    <div className="flex flex-col h-[100%]">
      <div className={`h-[80%] mt-2 bg-skin-fill`}>
        <div className="w-[100%] h-[100%] flex flex-col ml-auto mr-auto overflow-auto overflow-x-hidden">
          <MessageIn />
          <MessageOut />
          <MessageIn />
          <MessageOut />
          <MessageIn />
          <MessageOut />
          <MessageIn />
          <MessageOut />
        </div>
      </div>
      <InputPanel/>
    </div>
  );
}
