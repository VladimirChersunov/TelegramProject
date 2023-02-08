import { CentrColumn } from "./CentralColumn/CentrColumn";
import { LeftColumn } from "./LeftColumn/LeftColumn";
import { RightColumn } from "./RightColumn/RightColumn";

export function MainPage() {
  return (
    <div className="flex flex-row min-h-screen border-skin-border-base text-skin-base bg-skin-fill overflow-hidden">
      <LeftColumn />
      <CentrColumn />
      <RightColumn/>
    </div>
  );
}
