import {useEffect, useState} from 'react'

export function InfoBlock(props) {

const[typeChat, setTypeChat] =  useState(null);

  useEffect(() => { 
    
   if(props.chat.type === 'channel'){
      setTypeChat(`${props.chat.members} subscrybers`)
    }
    else if(props.chat.type === 'group'){
      setTypeChat(`${props.chat.members} members`)
    }
    else{
      setTypeChat(props.chat.author.lastSeen)
    }
   
  }, [props.chat]);

  return (
    <div onClick={()=>{props.toggleRightColumn(true)}} className="flex flex-row hover:cursor-pointer justify-between w-1/2 ">
      <div className="flex flex-row  h-[100%] w-[100%]  ">
        <div>
          <div className="rounded-full mt-[5px] ml-1 mr-2 h-[40px] w-[40px] bg-purple-500 flex flex-row justify-center text-white text-2xl pt-1">
            <p>T</p>
          </div>
        </div>

        <div className="flex flex-col  w-[85%] mt-1">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-lg mr-2">{props.chat.chatName} </p>
              {typeChat && <p className="text-xs"> {typeChat} </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
