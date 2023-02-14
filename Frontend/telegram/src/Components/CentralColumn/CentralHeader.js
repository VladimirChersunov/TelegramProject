import { CentralTools } from "./CentralTools";
import { InfoBlock } from "./InfoBlock";
import { PinnedMessage } from "./PinnedMessage";

export function CentralHeader(props) {
  return (
    <div className="h-[60px] flex flex-row max-w-full bg-skin-fill border-b-skin-border-base border text-2xl justify-between">
      <InfoBlock
        chat={props.chat}
        toggleRightColumn={props.toggleRightColumn}
      />
      {props.chat.pinned && <PinnedMessage pinned={props.chat.pinned} />}
      <CentralTools chatType={props.chatType} />
    </div>
  );
}
