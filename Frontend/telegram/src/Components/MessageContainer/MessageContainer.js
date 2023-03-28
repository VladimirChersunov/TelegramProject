import { MessageHeader } from "./MessageHeader";
import { MainChat } from "./MainChat";


export function MessageContainer({chat,toggleRightColumn,changeThemes,darkMode}) {

  return (
    <div className="flex flex-col max-h-screen  overflow--hidden">
      <MessageHeader chat={chat} toggleRightColumn={toggleRightColumn}/>
      <MainChat chat={chat} changeThemes={changeThemes} darkMode={darkMode}/>      
    </div>
  );
}
