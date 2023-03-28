import { MessageTools } from "./MessageTools";
import { InfoBlock } from "./InfoBlock";
import { PinnedMessage } from "./PinnedMessage";

export function MessageHeader({chat,toggleRightColumn}) {

  return (
    <div className="h-[60px] flex flex-row max-w-full border-b border-b-skin-border-base dark:border-b-skin-border-inverted text-2xl justify-between">
      <InfoBlock
        chat={chat}
        toggleRightColumn={toggleRightColumn}
      />
      {chat.pinnedMessageId && <PinnedMessage pinned={chat.pinnedMessageId} />}
      <MessageTools chat={chat} />
    </div>
  );
}
