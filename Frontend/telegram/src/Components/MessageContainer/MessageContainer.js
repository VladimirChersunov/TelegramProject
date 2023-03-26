import { MessageHeader } from "./MessageHeader";
import { MainChat } from "./MainChat";


export function MessageContainer(props) {

  return (
    <div className="w-[1000px] max-h-screen min-w-[600px] overflow--hidden">
      <MessageHeader chat={props.chat} toggleRightColumn={props.toggleRightColumn}/>
      <MainChat chat={props.chat} changeThemes={props.changeThemes} darkMode={props.darkMode}/>      
    </div>
  );
}
