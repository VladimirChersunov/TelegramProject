import { useState, useRef,useEffect } from "react";
import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { AddPicture } from "../Icons/AddPicture";
import { editProfile } from "../../Services/userServices";
import { useTranslation } from "react-i18next";


export function EditProfile({ visibleEdit, currentUser }) {
 

  const [usernameData, setUsernameData] = useState(currentUser?.userName || "");
  const [emailData, setEmailData] = useState(currentUser?.email || "");
  const [ageData, setAgeData] = useState(currentUser?.age || "");
  const [aboutData, setAboutData] = useState(currentUser?.aboutUser || "");
  const [photo, setPhoto] = useState(currentUser?.photo);
  const fileInputRef = useRef(null);
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);
  
  const handleClickBack = () => {
    visibleEdit(false);
  };

  const handleLinkIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = async () => {
   
          try {
            const data = await editProfile(
              currentUser?.id,
              usernameData,
              emailData,
              aboutData,
              ageData,
              photo
            );
            console.log(data);
          } catch(error) {
            console.log(error)
          } finally {
          }
       
   
  };

  return (
    <div className="flex flex-col w-[350px] sm:w-screen overflow-auto">
      <div className="flex flex-row items-center">
        <button
          className="ml-2 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
                 justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>

        <label className="text-2xl sm:text-xl mt-4 ml-2 select-none">{t("mainPage.editProfile")}</label>
      </div>
      {/* профиль */}
      <div className="overflow-y-scroll scrollbar">
        <div className="flex items-center justify-center my-5">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            hidden
            accept="image/*"
          />
          <button onClick={handleLinkIconClick}>
            {photo ? (
              <img
                src={photo}
                alt="Selected"
                className="w-[150px] h-[150px] object-cover rounded-full mb-5"
              />
            ) : (
              <AddPicture />
            )}
          </button>
        </div>

        {/* инпуты */}
        <div className="flex flex-col items-center justify-center">
          <label className="text-xs text-left w-[250px] ml-5"> {t("mainPage.username")}</label>
          <input
            type="text"
            value={usernameData}
            onChange={(e) => setUsernameData(e.target.value)}
            className="w-[250px] h-[40px] border rounded-xl border-skin-border-base dark:border-skin-border-inverted bg-skin-fill
       dark:bg-skin-fill-inverted placeholder:text-skin-base dark:placeholder:text-skin-inverted placeholder:text-center  text-center"
          />

          <label className="text-xs text-left w-[250px] ml-5 mt-10">
          {t("mainPage.email")}
          </label>
          <input
            type="text"
            onChange={(e) => setEmailData(e?.target?.value)}
            value={emailData}
            className="w-[250px] h-[40px] border rounded-xl border-skin-border-base dark:border-skin-border-inverted bg-skin-fill
       dark:bg-skin-fill-inverted placeholder:text-skin-base dark:placeholder:text-skin-inverted placeholder:text-center  text-center"
          />

          <label className="text-xs text-left w-[250px] ml-5 mt-10"> {t("mainPage.age")}</label>
          <input
            type="text"
            value={ageData}
            onChange={(e) => setAgeData(e?.target?.value)}
            className="w-[250px] h-[40px] border rounded-xl border-skin-border-base dark:border-skin-border-inverted bg-skin-fill
       dark:bg-skin-fill-inverted placeholder:text-skin-base dark:placeholder:text-skin-inverted placeholder:text-center  text-center"
          />

          <label className="text-xs text-left w-[250px] ml-5 mt-10">
          {t("mainPage.aboutMyself")}
          </label>
          <textarea
            id="message"
            name="message"
            value={aboutData}
            onChange={(e) => setAboutData(e?.target?.value)}
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
            {t("mainPage.apply")}
          </button>
        </div>
      </div>
    </div>
  );
}
