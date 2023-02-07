import { InputPanel } from "./InputPanel";
import { MessageIn } from "./MessageIn";
import { MessageOut } from "./MessageOut";
import { useState } from "react";
import { DropDownMenu } from "../LeftColumn/DropDownMenu";


export function MainChat() {
  const [message, setMessage] = useState();
 
  return (
    <div className="flex flex-col h-[100%]">
      <div className={`h-[80%] mt-2 bg-skin-fill`}>
        <div className="w-[100%] h-[100%] flex flex-col ml-auto mr-auto overflow-auto overflow-x-hidden">
        
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
      <InputPanel />
    </div>
  );
}
