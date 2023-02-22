import { InputPanel } from "./InputPanel";

import { Message } from "./Message";
import { useEffect, useState } from "react";
import { ColorRAdioButton } from "../ColorRadioButton";

export function MainChat(props) {
  const [type, setType] = useState(false);
  const [currChat, setCurrChat] = useState(props.chat);
  const [windwHeight, setWindwHeight] = useState("100%");

  useEffect(() => {
    if (props.chat.type === "chat") {
      setType(true);
      setWindwHeight((prevHeight) => "80%");
    } else {
      setType(false);
      setWindwHeight((prevHeight) => "100%");
    }
  }, [props.chat.type]);

  

  return (
    <div className="flex flex-col h-[100%]">
      <div
        className={`h-[${windwHeight}] mt-2 flex flex-col overflow-x-hidden`}
      >
        {props.chat.messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
        <ColorRAdioButton changeThemes={props.changeThemes} />
      </div>

      {type && <InputPanel darkMode={props.darkMode} />}
    </div>
  );
}
