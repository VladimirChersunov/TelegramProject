import { InputPanel } from "./InputPanel";

import { Message } from "./Message";
import { useEffect, useState } from "react";
import { ColorRAdioButton } from "../ColorRadioButton";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export function MainChat(props) {
  const [type, setType] = useState(false);
  const [currChat, setCurrChat] = useState(props.chat);
  const [windwHeight, setWindwHeight] = useState("100%");

  const notify = () => toast("Wow so easy!");

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
        <button onClick={notify} className="w-[200px] h-[100px] bg-green-500">Notify test</button>
        <ToastContainer />
      </div>

      {type && <InputPanel darkMode={props.darkMode} />}
    </div>
  );
}
