import { MessageTools } from "./MessageTools";
import { InfoBlock } from "./InfoBlock";
import { PinnedMessage } from "./PinnedMessage";
import { useState, useEffect } from "react";

export function MessageHeader({
  chat,
  toggleRightColumn,
  currentChat,
  clearMain,
  visibleModalReport,
  visibleSide,
  visibleMain,
  isSmallWidth,
}) {
  const [pinnedMessage, setPinnedMessage] = useState(false);

  const pinnedClose = (props) => {
    setPinnedMessage(props);
  };

  useEffect(() => {
    if (chat?.pinnedMessageId > 0) {
      setPinnedMessage(true);
    } else {
      setPinnedMessage(false);
    }
  }, [chat?.pinnedMessageId]);

  return (
    <div className="h-[60px] relative  items-center sm:h-max flex flex-row sm:flex-wrap max-w-full border-b bg-skin-fill dark:bg-skin-fill-inverted z-50 border-b-skin-border-base dark:border-b-skin-border-inverted text-2xl justify-between">
      <InfoBlock
        chat={chat}
        toggleRightColumn={toggleRightColumn}
        visibleSide={visibleSide}
        visibleMain={visibleMain}
        isSmallWidth={isSmallWidth}
      />
      <div className="flex flex-row sm:flex-col">
        {pinnedMessage && (
          <PinnedMessage
            pinned={chat?.pinnedMessageId}
            currentChat={currentChat}
            chat={chat}
            pinnedClose={pinnedClose}
          />
        )}
        <MessageTools
          chat={chat}
          clearMain={clearMain}
          visibleModalReport={visibleModalReport}
        />
      </div>
    </div>
  );
}
