import React, { useState, useEffect, useRef } from "react";
import { ContactsCard } from "./ContactsCard";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { EnterIcon } from "../Icons/EnterIcon";
import { createChat } from "../../Services/chatServices";
import { AddPicture } from "../Icons/AddPicture";

export function AddNewChat({
  chatType,
  visibleAddNewChat,
  checkedContacts,
  currentUser,
  visibleAddNewChatFinish,
}) {
  //console.log(checkedContacts)

  const fileInputRef = useRef(null);
  const [channel, setChannel] = useState(false);
  const [chatImage, setChatImage] = useState(null);
  const [chatName, setChatName] = useState(null);
  const members = checkedContacts.map((contact) => contact.id);
  const [chatInfo, setChatInfo] = useState(null);

  useEffect(() => {
    if (chatType === "Channel") {
      setChannel(true);
    } else {
      setChannel(false);
    }
  }, [chatType]);

  const handleCreateChat = async() => {
    const responce = await createChat(
      chatImage,
      chatName,
      chatType,
      chatInfo,
      currentUser.id,
      members
    );
    
    if(responce.result === 'success'){
      visibleAddNewChatFinish(false);
    }
  };

  

  const handleLinkIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setChatImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickBack = () => {
    visibleAddNewChat(false);
  };

  const handleChatNameChange = (e) => {
    setChatName(e.target.value);
  };

  const handleChatInfoChange = (e) => {
    setChatInfo(e.target.value);
  };

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

        <div className="text-2xl mt-3 ml-2 "> New {chatType}</div>
      </div>

      <div className="w-full text-center mt-5 flex flex-col ">
       

        <div>
          <input
            type="file"
            
            ref={fileInputRef}
            onChange={handleFileInputChange}
            hidden
            accept="image/*"
          />
          <button onClick={handleLinkIconClick}>
            {chatImage ? (
              <img
                src={chatImage}
                alt="Selected"
                className="w-[150px] h-[150px] object-cover rounded-full mb-5"
              />
            ) : (
              <AddPicture />
            )}
          </button>
        </div>

        <input
        required={true}
          className="m-5 pl-2 text-xl bg-skin-fill dark:bg-skin-fill-inverted text-skin-base dark:text-skin-inverted
        border-b border-skin-border-base dark:border-skin-border-inverted outline-none"
          placeholder={`${chatType} name`}
          onChange={handleChatNameChange}
        />

        {channel && (
          <div className="flex flex-col">
            <input
              onChange={handleChatInfoChange}
              className="m-5 text-xl bg-skin-fill dark:bg-skin-fill-inverted text-skin-base dark:text-skin-inverted
        border-b border-skin-border-base dark:border-skin-border-inverted outline-none pl-2"
              placeholder="Description (optional)"
            />
            <p className="text-xs opacity-70">
              You can provide an optional description for
            </p>
            <p className="text-xs opacity-70">your channel</p>
          </div>
        )}
        <label className="text-lg mt-3">{checkedContacts.length} members</label>
        <div className="mx-5 flex flex-col justify-center">
          {checkedContacts.map((contact) => (
            <div key={contact.id} className="flex flex-col m-1">
              <ContactsCard contact={contact} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-[15%] ">
        <button
          onClick={handleCreateChat}
          className="h-[50px] w-[50px]  flex items-center justify-center rounded-full  ml-[80%] bg-skin-fill-inverted
         dark:bg-skin-fill hover:bg-skin-button-inverted-hover dark:hover:bg-skin-button-inverted-hover"
        >
          <EnterIcon styles="w-9 h-9 stroke-skin-stroke-inverted dark:stroke-skin-stroke-base fill-none" />
        </button>
      </div>
    </div>
  );
}
