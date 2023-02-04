import { CentralTools } from "./CentralTools";
import { InfoBlock } from "./InfoBlock";
import { PinnedMessage } from "./PinnedMessage";

export function CentralHeader() {
  return (
    <div className="h-[60px] flex flex-row max-w-full bg-skin-fill border-b-skin-border-base border text-2xl">
      <InfoBlock />
      <PinnedMessage />
      <CentralTools />
    </div>
  );
}
