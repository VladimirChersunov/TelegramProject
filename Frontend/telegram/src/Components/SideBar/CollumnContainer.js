import { About } from "./About";
import { LeftHeader } from "./LeftHeader";
import { RadioChatList } from "./RadioChatList";
import { useState } from "react";
import { ReportBug } from "./ReportBug";
import { SettingWindow } from "./SettingWindow";
import { ContactWindow } from "./ContactWindow";
import { AddMembers } from "./AddMembers";
import { AddNewMessage } from "./AddNewMessage";
import { AddNewChat } from "./AddNewChat";
import { SearchWindow } from "./SearchWindow";
import { StartPrivate } from "./StartPrivate";
import { EditProfile } from "./EditProfile";

export function CollumnContainer({
  chats,
  contacts,
  currentUser,
  darkMode,
  handleMuted,
  toggleDarkMode,
  currentChat,
  clearMain
}) {
  const [aboutState, setAboutState] = useState(false);
  const [chatlistState, setChatlistState] = useState(true);
  const [bugReportState, setBugReport] = useState(false);
  const [settingState, setSettingState] = useState(false);
  const [contactState, setContactState] = useState(false);
  const [addMembersState, setAddMembersState] = useState(false);
  const [addMessageState, setAddMessageState] = useState(false);
  const [addGroupState, setAddGroupState] = useState(false);
  const [searchWindowState, setSearchWindowState] = useState(false);
  const [chatType, setChatType] = useState("");
  const [checkedContacts, setCheckedContacts] = useState([]);
  const [startPrivateState, setStartPrivateState] = useState(false);
  const [editState, setEditState] = useState(false);

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
    setChatType(props);
  };

  const visibleAddMessage = (props) => {
    setAddMessageState(props);
    setChatlistState(!props);
  };

  const visibleAddNewChat = (props) => {
    setAddGroupState(props);
    setAddMembersState(!props);
  };

  const visibleAddNewChatFinish = (props) => {
    setAddGroupState(props);
    setChatlistState(!props);
  };

  const visibleSearchWindow = (props) => {
    setSearchWindowState(props);
    setChatlistState(!props);
  };

  const visibleStartPrivate = (props) => {
    setStartPrivateState(props);
    setChatlistState(!props);
  };

  const handleCheckedContacts = (props) => {
    setCheckedContacts(props);
  };

  const visibleEdit = (props) => {
    setEditState(props);
    setSettingState(!props);
  };

  return (
    <div
      className={`h-screen  flex flex-col border-r border-skin-border-base dark:border-skin-border-inverted items-center 
       border-solid min-w-[350px] max-w-[400px]`}
    >

      {aboutState && <About visibleAbout={visibleAbout} />}

      {bugReportState && <ReportBug visibleBugReport={visibleBugReport} />}


      {settingState && (
        <SettingWindow
          visibleSetting={visibleSetting}
          currentUser={currentUser}
          visibleEdit={visibleEdit}
        />
      )}


      {contactState && (
        <ContactWindow visibleContact={visibleContact} contacts={contacts} currentChat={currentChat}/>
      )}

      {startPrivateState && (
        <StartPrivate
          visibleStartPrivate={visibleStartPrivate}
          contacts={contacts}
          chatType={chatType}
          currentChat={currentChat}
          currentUser={currentUser}
        />
      )}

      {editState && <EditProfile visibleEdit={visibleEdit}  currentUser={currentUser}/>}

      {addMembersState && (
        <AddMembers
          contacts={contacts}
          visibleAddmembers={visibleAddmembers}
          chatType={chatType}
          visibleAddMessage={visibleAddMessage}
          visibleAddNewChat={visibleAddNewChat}
          handleCheckedContacts={handleCheckedContacts}
         
        />
      )}
      {addMessageState && (
        <AddNewMessage visibleAddMessage={visibleAddMessage} />
      )}
      {addGroupState && (
        <AddNewChat
        visibleAddNewChatFinish={visibleAddNewChatFinish}
          visibleAddNewChat={visibleAddNewChat}
          chatType={chatType}
          checkedContacts={checkedContacts}
          currentUser={currentUser}
        />
      )}

      {searchWindowState && (
        <SearchWindow visibleSearchWindow={visibleSearchWindow} currentChat={currentChat}/>
      )}

      {chatlistState && (
        <div className="flex flex-col min-w-[350px] max-w-[400px] h-screen">
          <LeftHeader
          currentChat={currentChat}
           chats={chats}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            visibleAbout={visibleAbout}
            visibleBugReport={visibleBugReport}
            visibleSetting={visibleSetting}
            visibleContact={visibleContact}
            visibleSearchWindow={visibleSearchWindow}
          />
          <RadioChatList
           currentUser={ currentUser}
            chats={chats}
            clearMain={clearMain}
            currentChat={currentChat}
            handleMuted={handleMuted}
            visibleAddNewChat={visibleAddNewChat}
            visibleAddMessage={visibleAddMessage}
            chatTypeCallback={chatTypeCallback}
            visibleAddmembers={visibleAddmembers}
            visibleStartPrivate={visibleStartPrivate}
          />
        </div>
      )}
    </div>
  );
}
