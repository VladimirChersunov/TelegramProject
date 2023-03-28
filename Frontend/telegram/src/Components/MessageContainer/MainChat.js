import { InputPanel } from "./InputPanel";
import { Message } from "./Message";
import {useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function MainChat({chat,darkMode }) {
  const [type, setType] = useState(false);
  const [currChat, setCurrChat] = useState(chat);
  const [windwHeight, setWindwHeight] = useState("80%");

  const notify = () =>
    toast.warning("New message!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className:
        "bg-skin-fill dark:bg-skin-fill-inverted border border-skin-border-base dark:border-skin-border-inverted ",

      bodyClassName: "text-skin-base dark:text-skin-inverted",
      closeButton: (
        <div className="text-skin-base dark:text-skin-inverted">X</div>
      ),
      progressClassName: "fancy-progress-bar bg-white",
    });

  // useEffect(() => {
  //   if (props.chat.type === "chat") {
  //     setType(true);
  //     setWindwHeight((prevHeight) => "80%");
  //   } else {
  //     setType(false);
  //     setWindwHeight((prevHeight) => "100%");
  //   }
  // }, [props.chat.type]);

  return (
    <div className="flex flex-col h-screen">
      <div
        className={`h-[${windwHeight}] mt-2 flex flex-col overflow-x-hidden text-skin-base `}
      >
        
        {/* <ColorRAdioButton changeThemes={props.changeThemes} /> */}
        {/* <button onClick={notify} className="w-[200px] h-[100px] bg-green-500">Notify test</button> */}
        <ToastContainer />
      </div>

      <InputPanel darkMode={darkMode} />
    </div>
  );
}

// const ret = ( )=>{
//   {chat.messages.map((message) => (
//     <Message message={message} key={message.id} />
//   ))}
// }