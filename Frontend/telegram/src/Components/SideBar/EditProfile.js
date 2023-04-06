import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { AddPicture } from "../Icons/AddPicture";
import { editProfile } from "../../Services/userServices";

export function EditProfile({ visibleEdit, currentUser }) {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const [usernamePlaceholder, setUsernamePlaceholder] = useState(
    currentUser.userName
  );
  const [emailPlaceholder, setEmailPlaceholder] = useState(currentUser.email);
  const [agePlaceholder, setAgePlaceholder] = useState(currentUser.age);
  const [usernameData, setUsernameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [ageData, setAgeData] = useState("");
  const [aboutData, setAboutData] = useState("");
  const cropperRef = useRef(null);
  const[photo, setPhoto]=useState(null)

  function handleFileInputChange(event) {
    setSelectedFile(event.target.files[0]);
  }
 

  const handleClickBack = () => {
    visibleEdit(false);
  };

  const handleProfileChange = async () => {
    try {
      const data = await editProfile(
        currentUser.id,
        usernameData,
        emailData,
        aboutData,
        ageData,       
        photo
      );
      console.log(data);
    } catch {
    } finally {
    }
  };

  return (
    <div className="flex flex-col w-[350px] w-min-[350px] overflow-auto">
      <div className="flex flex-row items-center">
        <button
          className="ml-2 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
                 justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>

        <label className="text-2xl mt-4 ml-2 select-none">Edit Profile</label>
      </div>
      {/* профиль */}
      <div className="overflow-y-scroll scrollbar">
        <div className="h-[200px] w-full">
          {/* картинка */}
          <div className="w-full flex items-center justify-center ">
            {selectedFile ? (
              <div className="relative">
                <Cropper
                  ref={cropperRef}
                  src={URL.createObjectURL(selectedFile)}
                  aspectRatio={1}
                  guides={false}
                  viewMode={1}
                  zoomable={false}
                  cropBoxResizable={false}
                  cropBoxMovable={false}
                  dragMode="move"
                  autoCropArea={1}
                />
               
              </div>
            ) : (
              <label
                htmlFor="file-input"
                className="block h-[200px] w-[200px]  px-4 py-2  rounded-full cursor-pointer bg-skin-fill
         dark:bg-skin-fill-inverted "
              >
                <div className="flex items-center justify-center text-5xl">
                  <div className="align-middle content-center items-center place-content-center p-1">
                    {currentUser.photo ? (
                      <img
                        src={currentUser.photo}
                        alt="logo"
                        className="rounded-full  h-[150px] w-[150px]"
                      />
                    ) : (
                      <div className="rounded-full   h-[150px] w-[150px] bg-purple-500 flex items-center justify-center select-none">
                        <AddPicture />
                      </div>
                    )}
                  </div>
                </div>
                <input
                  id="file-input"
                  type="file"
                  onChange={handleFileInputChange}
                  className="sr-only"
                />
              </label>
            )}
            {/* <div className="relative">
        <img src={cropData} alt="Cropped" />
      </div> */}
          </div>
        </div>

        {/* инпуты */}
        <div className="flex flex-col items-center justify-center">
          <label className="text-xs text-left w-[250px] ml-5">Username</label>
          <input
            type="text"
            value={usernameData}
            onChange={(e) => setUsernameData(e.target.value)}
            className="w-[250px] h-[40px] border rounded-xl border-skin-border-base dark:border-skin-border-inverted bg-skin-fill
       dark:bg-skin-fill-inverted placeholder:text-skin-base dark:placeholder:text-skin-inverted placeholder:text-center  text-center"
            placeholder={usernamePlaceholder}
            onFocus={() => setUsernamePlaceholder("")}
            onBlur={() => setUsernamePlaceholder(currentUser.userName)}
          />

          <label className="text-xs text-left w-[250px] ml-5 mt-10">
            Email
          </label>
          <input
            type="text"
            onChange={(e) => setEmailData(e.target.value)}
            value={emailData}
            className="w-[250px] h-[40px] border rounded-xl border-skin-border-base dark:border-skin-border-inverted bg-skin-fill
       dark:bg-skin-fill-inverted placeholder:text-skin-base dark:placeholder:text-skin-inverted placeholder:text-center  text-center"
            placeholder={emailPlaceholder}
            onFocus={() => setEmailPlaceholder("")}
            onBlur={() => setEmailPlaceholder(currentUser.email)}
          />

          <label className="text-xs text-left w-[250px] ml-5 mt-10">Age</label>
          <input
            type="text"
            value={ageData}
            onChange={(e) => setAgeData(e.target.value)}
            className="w-[250px] h-[40px] border rounded-xl border-skin-border-base dark:border-skin-border-inverted bg-skin-fill
       dark:bg-skin-fill-inverted placeholder:text-skin-base dark:placeholder:text-skin-inverted placeholder:text-center  text-center"
            placeholder={agePlaceholder}
            onFocus={() => setAgePlaceholder("")}
            onBlur={() => setAgePlaceholder(currentUser.agee)}
          />

          <label className="text-xs text-left w-[250px] ml-5 mt-10">
            About myself
          </label>
          <textarea
            id="message"
            name="message"
            value={aboutData}
            onChange={(e) => setAboutData(e.target.value)}
            maxLength="120"
            className="w-[250px] text-skin-base border-skin-border-base border rounded-md resize-none
             dark:border-skin-border-inverted  p-2 bg-skin-fill dark:bg-skin-fill-inverted outline-none dark:text-skin-inverted"
            rows="6"
            required
          ></textarea>

          <button
            onClick={handleProfileChange}
            className="h-[40px] w-[150px] mt-5 mb-10  dark:bg-skin-button-accent bg-skin-button-inverted 
           dark:text-skin-inverted text-skin-base border border-skin-border-base dark:border-skin-border-inverted
            rounded-2xl "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
