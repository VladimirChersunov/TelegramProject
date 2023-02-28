import { MenuButton } from "./MenuButton";
import { SerchInput } from "./SerchInput";

export function LeftHeader(props) {
 
  return (
    <div className="h-[60px] flex flex-row max-w-full">
      <MenuButton
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
        visibleAbout={props.visibleAbout}
        visibleBugReport={props.visibleBugReport}
        visibleSetting={props.visibleSetting}
        visibleContact={props.visibleContact}
      />

      <SerchInput />
    </div>
  );
}
