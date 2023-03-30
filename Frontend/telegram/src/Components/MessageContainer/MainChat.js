import { InputPanel } from "./InputPanel";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllMessaages } from "../../Services/messageServices";
import { Message } from "./Message";
import { getUser, getUserByUsername } from "../../Services/userServices";

export function MainChat({ chat, changeThemes, darkMode, currentUser }) {
  const [dataMessages, setDataMessages] = useState({});
  const [currChat, setCurrChat] = useState(chat);
  const [windwHeight, setWindwHeight] = useState("80%");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { chatName, authorId, type } = chat;

  useEffect(() => {
    const getData = async () => {
      try {
        //const startTime = performance.now();
        const allMessaages = await getAllMessaages(chatName, authorId, type);

        setDataMessages(allMessaages);
        //const endTime = performance.now();

        //const responseTime = Math.floor(endTime - startTime); // вычисляем время ответа сервера в миллисекундах
        //console.log(`Response time: ${responseTime}ms`);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    // Получать данные с сервера каждую секунды
    // const intervalId = setInterval(() => {
    //   getData();
    // }, 1000);
    getData();
    // Очищать интервал при размонтировании компонента
    // return () => clearInterval(intervalId);
  }, [chatName, authorId, type]);

  // const notify = () =>
  //   toast.warning("New message!", {
  //     position: toast.POSITION.BOTTOM_RIGHT,
  //     className:
  //       "bg-skin-fill dark:bg-skin-fill-inverted border border-skin-border-base dark:border-skin-border-inverted ",

  //     bodyClassName: "text-skin-base dark:text-skin-inverted",
  //     closeButton: (
  //       <div className="text-skin-base dark:text-skin-inverted">X</div>
  //     ),
  //     progressClassName: "fancy-progress-bar bg-white",
  //   });

  //console.log(dataMessages.messages)

  return (
    <div className="flex flex-col h-screen max-w-full">
      <div
        className={`h-[80%] mt-2 flex flex-col overflow-x-hidden text-skin-base overflow-y-scroll scrollbar `}
      >
        {dataMessages?.messages?.map((message) => (
          <Message
            chatName={chatName}
            message={message}
            key={message.id}
            currentUser={currentUser}
          />
        ))}
        {/* <ColorRAdioButton changeThemes={props.changeThemes} /> */}
        {/* <button onClick={notify} className="w-[200px] h-[100px] bg-green-500">Notify test</button> */}
        <ToastContainer />
      </div>
      
        <InputPanel darkMode={darkMode} currentUser={currentUser} chat={chat} />
     
    </div>
  );
}

// const ret = ( )=>{
//   {chat.messages.map((message) => (
//     <Message message={message} key={message.id} />
//   ))}
// }
