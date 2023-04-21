import { MenuButton } from "./MenuButton";
import { SerchInputInActive } from "./SearchInputInActive";

export function LeftHeader(props) {
 
  return (
    <div className="h-[60px] flex flex-row w-full sm:w-screen">
      <MenuButton
      changeThemes={props.changeThemes}
       currentChat={props.currentChat}
       chats={props.chats}
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
        visibleAbout={props.visibleAbout}
        visibleBugReport={props.visibleBugReport}
        visibleSetting={props.visibleSetting}
        visibleContact={props.visibleContact}
      />
<SerchInputInActive visibleSearchWindow={props.visibleSearchWindow}/>
      
    </div>
  );
}
