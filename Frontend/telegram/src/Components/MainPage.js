import { CentrColumn } from "./CentrWindow/CentrColumn";
import { LeftColumn } from "./LeftColumn/LeftColumn";

export function MainPage() {
  return (
    <div className="flex flex-row min-h-screen border-skin-border-base text-skin-base bg-skin-fill overflow-hidden">
      <LeftColumn />
      <CentrColumn />
    </div>
  );
}
