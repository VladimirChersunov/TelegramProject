import { About } from "./About";
import { LeftHeader } from "./LeftHeader";
import { RadioChatList } from "./RadioChatList";
import { useState, useEffect } from "react";
import { ReportBug } from "./ReportBug";
import { SettingWindow } from "./SettingWindow";
import { ContactWindow } from "./ContactWindow";

export function LeftColumn(props) {
  const [aboutState, setAboutState] = useState(false);
  const [chatlistState, setChatlistState] = useState(true);
  const [bugReportState, setBugReport] = useState(false);
  const [settingState, setSettingState] = useState(false);
  const [contactState, setContactState] = useState(false);

  useEffect(() => {}, []);

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

  return (
    <div
      className={`h-screen w-1/4 flex flex-col border-r border-skin-border-base dark:border-skin-border-inverted   border-solid min-w-[300px]`}
    >
      {aboutState && <About visibleAbout={visibleAbout} />}
      {bugReportState && <ReportBug visibleBugReport={visibleBugReport} />}
      {settingState && <SettingWindow visibleSetting={visibleSetting} />}
      {contactState && <ContactWindow visibleContact={visibleContact} />}

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
          <RadioChatList chats={props.chats} currentChat={props.currentChat} />
        </div>
      )}
    </div>
  );
}
