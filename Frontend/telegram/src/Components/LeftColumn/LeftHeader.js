import { MenuButton } from "./MenuButton";
import { SerchInput } from "./SerchInput";

export function LeftHeader() {
  return (
    <div className="h-[60px] flex flex-row max-w-full">
      <MenuButton />
      <SerchInput />
    </div>
  );
}
