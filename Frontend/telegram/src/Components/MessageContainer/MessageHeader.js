import { MessageTools } from "./MessageTools";
import { InfoBlock } from "./InfoBlock";
import { PinnedMessage } from "./PinnedMessage";

export function MessageHeader(props) {
  return (
    <div className="h-[60px] flex flex-row max-w-full border-b border-b-skin-border-base dark:border-b-skin-border-inverted text-2xl justify-between">
      <InfoBlock
        chat={props.chat}
        toggleRightColumn={props.toggleRightColumn}
      />
      {props.chat.pinned && <PinnedMessage pinned={props.chat.pinned} />}
      <MessageTools chat={props.chat} />
    </div>
  );
}
