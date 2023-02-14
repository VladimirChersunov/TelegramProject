import { InputPanel } from "./InputPanel";
import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";
import { useEffect, useState } from "react";




export function MainChat(props) {
  const [type, setType] = useState(false);

  useEffect(() => {
    if (props.chat.type === "chat") {
      setType(true);
    } else {
      setType(false);
    }
  }, [props.chat.type]);
 
  return (
    <div className="flex flex-col h-[100%]">
      <div className={`h-[80%] mt-2 bg-skin-fill`}>
        <div className="w-[70%] h-[100%] flex flex-col ml-auto mr-auto overflow-auto overflow-x-hidden">
        
          <MessageIn
            message={{
              id: 1,
              author: "Obi-Wan Kenobi",
              authorImage: "T",
              sendTime: "00:00",
              data: 'text',
              sendStatus: "Delivered",
            }}
          />
         
          <MessageOut
            message={{
              id: 2,
              author: "Anakin",
              authorImage: "T",
              sendTime: "00:00",
              data: 'text',
              sendStatus: "Seen at 12:46",
            }}
          />
         
 

          {/* {
            message.map(message => 
              <MessageIn message={{id:1, author: 'Obi-Wan Kenobi', authorImage:'T', sendTime:'00:00', data:'text', sendStatus:'Delivered'}}  />             
              )
          } */}
        </div>
      </div>
     {type && <InputPanel />}
    </div>
  );
}
