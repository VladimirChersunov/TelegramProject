import { About } from "./About";
import { LeftHeader } from "./LeftHeader";
import { RadioChatList } from "./RadioChatList";
import { useState, useEffect } from "react";
import { ReportBug } from "./ReportBug";
import { SettingWindow } from "./SettingWindow";
import { ContactWindow } from "./ContactWindow";
import { AddMembers } from "./AddMembers";
import { AddNewMessage } from "./AddNewMessage";
import { AddNewChat } from "./AddNewChat";

export function LeftColumn(props) {
  const [aboutState, setAboutState] = useState(false);
  const [chatlistState, setChatlistState] = useState(true);
  const [bugReportState, setBugReport] = useState(false);
  const [settingState, setSettingState] = useState(false);
  const [contactState, setContactState] = useState(false);
  const [addMembersState, setAddMembersState] = useState(false);
  const [addMessageState, setAddMessageState] = useState(false);
  const [addGroupState, setAddGroupState] = useState(false);
  const[chatType, setChatType] = useState('')

  useEffect(() => {

  }, []);

  const visibleAbout = (props) => {
    setAboutState(props);
    setChatlistState(!props);
  };

  const visibleBugReport = (props) => {
    setBugReport(props);
    setChatlistState(!props);
  };

  

  const visibleSetting = (props) => {
    setSettingState(props);
    setChatlistState(!props);
  };

  const visibleContact = (props) => {
    setContactState(props);
    setChatlistState(!props);
  };

  const visibleAddmembers = (props) => {
    setAddMembersState(props);
    setChatlistState(!props);
  };

  const chatTypeCallback = (props) => {
    setChatType(props)
  };

  const visibleAddMessage = (props) => {
    setAddMessageState(props);
    setChatlistState(!props);
  };

  const visibleAddNewChat = (props) => {
    setAddGroupState(props);
    setAddMembersState(!props);
  };

  return (
    <div
      className={`h-screen w-1/4 flex flex-col border-r border-skin-border-base dark:border-skin-border-inverted   border-solid min-w-[300px]`}
    >
      {aboutState && <About visibleAbout={visibleAbout} />}
      {bugReportState && <ReportBug visibleBugReport={visibleBugReport} />}
      {settingState && <SettingWindow visibleSetting={visibleSetting} />}
      {contactState && (
        <ContactWindow
          visibleContact={visibleContact}
          contacts={props.contacts}
        />
      )}
      {addMembersState && (
        <AddMembers 
        contacts={props.contacts}
         visibleAddmembers={visibleAddmembers}
         chatType={chatType}
         visibleAddMessage={visibleAddMessage}
         visibleAddNewChat={visibleAddNewChat}
        
         />
      )}
      {addMessageState && <AddNewMessage visibleAddMessage={visibleAddMessage}/>}
      {addGroupState && <AddNewChat visibleAddNewChat={visibleAddNewChat} chatType={chatType}/>}

      {chatlistState && (
        <div className="flex flex-col">
          <LeftHeader
            darkMode={props.darkMode}
            toggleDarkMode={props.toggleDarkMode}
            visibleAbout={visibleAbout}
            visibleBugReport={visibleBugReport}
            visibleSetting={visibleSetting}
            visibleContact={visibleContact}
          />
          <RadioChatList
            chats={props.chats}
            currentChat={props.currentChat}
            handleMuted={props.handleMuted}
            visibleAddNewChat={visibleAddNewChat}
            visibleAddMessage={visibleAddMessage}
            chatTypeCallback={chatTypeCallback}
            visibleAddmembers={visibleAddmembers}
          />
        </div>
      )}
    </div>
  );
}
