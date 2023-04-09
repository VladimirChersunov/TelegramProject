import { MessageTools } from "./MessageTools";
import { InfoBlock } from "./InfoBlock";
import { PinnedMessage } from "./PinnedMessage";
import { useState, useEffect } from "react";

export function MessageHeader({
  chat,
  toggleRightColumn,
  currentChat,
  clearMain,
  visibleModalReport
}) {
  const [pinnedMessage, setPinnedMessage] = useState(false);

  const pinnedClose = (props) => {
    setPinnedMessage(props);
  };

  useEffect(() => {
    if (chat?.pinnedMessageId > 0) {
      setPinnedMessage(true);
    }
  }, [chat?.pinnedMessageId]);

  return (
    <div className="h-[60px] flex flex-row max-w-full border-b border-b-skin-border-base dark:border-b-skin-border-inverted text-2xl justify-between">
      <InfoBlock chat={chat} toggleRightColumn={toggleRightColumn} />
      <div className="flex flex-row">
        {pinnedMessage && (
          <PinnedMessage
            pinned={chat?.pinnedMessageId}
            currentChat={currentChat}
            chat={chat}
            pinnedClose={pinnedClose}
          />
        )}
        <MessageTools chat={chat} clearMain={clearMain} visibleModalReport={visibleModalReport}/>
      </div>
    </div>
  );
}
