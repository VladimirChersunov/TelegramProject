import React, { useState, useEffect } from "react";
import { ContactsCard } from "../ContactsCard";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { EnterIcon } from "../Icons/EnterIcon";
import CustomFileInput from "./CustomFileInput";

export function AddNewChat(props) {
  useEffect(() => {
    if (props.chatType === "Group") {
      setGroup(true);
      setChannel(false);
    }
    if (props.chatType === "Channel") {
      setGroup(false);
      setChannel(true);
    }
  }, []);

  const handleNext = () => {};

  const [group, setGroup] = useState(false);
  const [channel, setChannel] = useState(false);

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
        <div className="flex flex-row items-end  m-2 "></div>

        <CustomFileInput />
        <input
          className="m-5 pl-2 text-xl bg-skin-fill dark:bg-skin-fill-inverted text-skin-base dark:text-skin-inverted
        border-b border-skin-border-base dark:border-skin-border-inverted outline-none"
          placeholder={`${props.chatType} name`}
        />

        {channel && (
          <div className="flex flex-col">
            <input
              className="m-5 text-xl bg-skin-fill dark:bg-skin-fill-inverted text-skin-base dark:text-skin-inverted
        border-b border-skin-border-base dark:border-skin-border-inverted outline-none pl-2"
              placeholder="Description (optional)"
            />
            <label className="text-xs opacity-70">
              You can provide an optional description for your channel
            </label>
          </div>
        )}
        <label className="text-lg mt-3">{props.checkedContacts.length} members</label>
        <div className="mx-5 flex flex-col justify-center">
          {props.checkedContacts.map((contact) => (
            <div className="flex flex-col m-1">
              <ContactsCard contact={contact} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-[15%] ">
        <button
          onClick={handleNext}
          className="h-[50px] w-[50px]  flex items-center justify-center rounded-full  ml-[80%] bg-skin-fill-inverted
         dark:bg-skin-fill hover:bg-skin-button-inverted-hover dark:hover:bg-skin-button-inverted-hover"
        >
          <EnterIcon style="w-9 h-9 stroke-skin-stroke-inverted dark:stroke-skin-stroke-base fill-none" />
        </button>
      </div>
    </div>
  );
}
