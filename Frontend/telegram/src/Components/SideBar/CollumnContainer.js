import { About } from "./About";
import { LeftHeader } from "./LeftHeader";
import { RadioChatList } from "./RadioChatList";
import { useState, useEffect } from "react";
import { ReportBug } from "./ReportBug";

export function LeftColumn(props) {

const [aboutState, setAboutState] =  useState(false)
const[chatlistState, setChatlistState] = useState(true)
const [bugReportState, setBugReport] =  useState(false)

useEffect(() => {

}, []);

const visibleAbout = (props) =>{
  setAboutState(props)
  setChatlistState(!props) 
}

const visibleBugReport = (props) =>{
  setBugReport(props)
  setChatlistState(!props) 
}

// const unvisibleAbout = () =>{
//   setAboutState(false)
//   setChatlistState(true)
// }

  return (
    <div
      className={`h-screen w-1/4 flex flex-col border-r border-skin-border-base dark:border-skin-border-inverted   border-solid min-w-[300px]`}
    >
      {aboutState&& <About visibleAbout={visibleAbout}/>}
     {bugReportState&& <ReportBug visibleBugReport={visibleBugReport}/>}
      
     {chatlistState&& <div className="flex flex-col">
      <LeftHeader
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
        visibleAbout={visibleAbout}
        visibleBugReport={visibleBugReport}
      />
      <RadioChatList chats={props.chats} currentChat={props.currentChat} /></div>}
    </div>
  );
}
