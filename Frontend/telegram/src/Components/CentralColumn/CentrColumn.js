import { CentralHeader } from "./CentralHeader";
import { MainChat } from "./MainChat";


export function CentrColumn(props) {

  return (
    <div className="w-3/4 max-h-screen min-w-[600px]">
      <CentralHeader chat={props.chat} toggleRightColumn={props.toggleRightColumn}/>
      <MainChat chat={props.chat} changeThemes={props.changeThemes}/>      
    </div>
  );
}
