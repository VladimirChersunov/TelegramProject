import React, { useState, useEffect } from "react";
import { BackArrowIcon } from "../Icons/BackArrowIcon";

export function AddNewChat(props) {

useEffect(() => {
  if(props.chatType === 'Group'){
    setGroup(true)
    setChannel(false)
  }
  if(props.chatType === 'Channel'){
    setGroup(false)
    setChannel(true)
  }
}, []);

const [group, setGroup] = useState(false)
const [channel, setChannel] = useState(false)

  const handleClickBack = () => {
    props.visibleAddNewChat(false);
  };

  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row items-center">
      <button
        className="ml-4 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
         justify-center items-center"
        onClick={handleClickBack}
      >
        <BackArrowIcon />       
      </button>
    
      <div className="text-2xl mt-3 ml-2 "> New {props.chatType}</div>
      </div>
     
    
      <div className="w-full text-center mt-10 flex flex-col ">
       <div className="flex flex-row items-end  m-2 ">
       
     
      </div>
      <div className="  w-[100%]">
        <input type="file" onChange={handleChange} />
        <img
          className="h-[100px] w-[100px] ml-[30%] mt-5 rounded-full"
          src={file}
          alt='logo'
        />
      </div>
      <input
        className="m-5 text-xl border border-slate-400 px-2 rounded-md"
        placeholder={`${props.chatType} name`}
      />

     {channel&& <div className="flex flex-col">
      <input
        className="m-5 text-xl border border-slate-400 px-2 rounded-md"
        placeholder="Description (optional)"
      />
      <label className="text-xs opacity-70">
        You can provide an optional description for your channel
      </label>
      </div>}
      
      <label className="mt-5">Members</label>
      </div>
    </div>
     
    
  );
}
