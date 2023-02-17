import React, { useState } from "react";

export function AddNewChat() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div
      className={`h-screen w-1/4 flex flex-col border-r  border-solid min-w-[200px] items-center`}
    >
      <div className="flex flex-row items-end  m-2 ">
        <button
          onClick={() => {}}
          className="ml-2 mr-4 text-3xl  hover:bg-slate-200 hover:border hover:border-black
         rounded-full w-[40px] h-[40px]"
        >
          &#129092;
        </button>
        <div className="text-2xl mb-1">New Group / New Channel</div>
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
        placeholder="Group name/Channel Name"
      />
      <input
        className="m-5 text-xl border border-slate-400 px-2 rounded-md"
        placeholder="Description (optional)"
      />
      <label className="text-xs opacity-70">
        You can provide an optional description for your channel
      </label>
      <label className="mt-5">Members</label>
    </div>
  );
}
