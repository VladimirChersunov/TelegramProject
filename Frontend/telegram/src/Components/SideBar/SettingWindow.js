import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { useNavigate } from "react-router-dom";
import { PenIcon } from "../Icons/PenIcon";
import { PeopleIcon } from "../Icons/PeopleIcon";
import { InfoIcon } from "../Icons/InfoIcon";
import { LogoutIcon } from "../Icons/LogoutIcon";
import { MailIcon } from "../Icons/MailIcon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


export function SettingWindow({ currentUser, visibleSetting, visibleEdit }) {
  const navigate = useNavigate();
  const MAX_LENGTH = 16;
  const language = localStorage.getItem("language");
 const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);
  
  const handleClickBack = () => {
    visibleSetting(false);
  };

  const formatEmail =(email)=> {
    if (currentUser.email.length <= MAX_LENGTH) {
      return currentUser.email;
    } else {
      const truncatedEmail = currentUser.email.slice(0, MAX_LENGTH) + '...';
      return truncatedEmail;
    }
  }
  const formattedEmail = formatEmail(currentUser.email);
  const handleEdit = () =>{
    visibleEdit(true)
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="flex flex-col w-[350px] w-min-[350px] overflow-auto">
      {/* header */}
      <div className="flex flex-row items-center">
        <button
          className="ml-2 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
         justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>

        <label className="text-2xl mt-4 ml-2 select-none">{t("mainPage.setting")}</label>
      </div>

      <div className="w-[350px] h-screen  flex flex-col items-center mt-5 overflow-y-scroll scrollbar">
        <div className="">
        {currentUser.photo ? (
          <img
            src={currentUser.photo}
            alt="logo"
            className="h-[250px] w-[250px] select-none  rounded-full"
          />
        ) : (
          <div className="rounded-full   h-[250px] w-[250px]  bg-purple-500 flex items-center justify-center select-none">
            <p className="text-[50px]">
              {currentUser.userName[0].toUpperCase() + currentUser.userName[1].toUpperCase()}
            </p>
          </div>
        )}
        </div>
       

        <div className="mt-10 text-xl  flex flex-row w-[90%] pl-2 ">
          <InfoIcon />
          <p className="h-[100px] ml-3 mt-[-2px]">
            {currentUser.aboutUser
              ? currentUser.aboutUser
              : `${t("mainPage.aboutMyselfSetting")}`}
          </p>
        </div>

        <div className="mt-2 text-xl  flex flex-row items-center  w-[90%]  pl-2 h-[40px]">
          <MailIcon/>
          <label className="ml-10">{formattedEmail}</label>
        </div>
        <div className="mt-2 text-xl  flex flex-row items-center  w-[90%]  pl-2 h-[40px]">
          <PeopleIcon />
          <label className="ml-10">{currentUser.userName}</label>
        </div>

        <div
        onClick={handleEdit}
          className="mt-2 text-xl  flex flex-row items-center   w-[90%] 
          cursor-pointer select-none hover:bg-skin-button-accent-hover rounded-lg pl-2 h-[40px]"
        >
          <PenIcon />
          <p className="ml-10">{t("mainPage.editProfile")}</p>
        </div>
        <div
          onClick={handleLogout}
          className="mt-2 text-xl  flex flex-row items-center  w-[90%]  mb-[60px]
          cursor-pointer select-none hover:bg-skin-button-accent-hover rounded-lg pl-2 h-[40px] "
        >
          <LogoutIcon/>
          <p className="ml-10">{t("mainPage.logout")}</p>
        </div>
      </div>
    </div>
  );
}
