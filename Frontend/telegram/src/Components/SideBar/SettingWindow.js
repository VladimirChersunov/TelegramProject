import { BackArrowIcon } from "../Icons/BackArrowIcon";
import { useNavigate } from "react-router-dom";
import { Ahtung } from "../Icons/Ahtung";
import { PenIcon } from "../Icons/PenIcon";
import { PeopleIcon } from "../Icons/PeopleIcon";
import { InfoIcon } from "../Icons/InfoIcon";


export function SettingWindow({ currentUser, visibleSetting, visibleEdit }) {
  const navigate = useNavigate();
 
  
  const handleClickBack = () => {
    visibleSetting(false);
  };

  

  const handleEdit = () =>{
    visibleEdit(true)
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="flex flex-col w-[350px] w-min-[350px]">
      {/* header */}
      <div className="flex flex-row items-center">
        <button
          className="ml-2 mt-4 rounded-full hover:bg-skin-button-accent-hover h-[50px] w-[50px] flex
         justify-center items-center"
          onClick={handleClickBack}
        >
          <BackArrowIcon />
        </button>

        <label className="text-2xl mt-4 ml-2 select-none">Setting</label>
      </div>

      <div className="w-[350px] flex flex-col items-center mt-5">
        {currentUser.photo ? (
          <img
            src={currentUser.photo}
            alt="logo"
            className="h-[300px] w-[300px] select-none ml-[-10px] rounded-full"
          />
        ) : (
          <div className="rounded-full   h-[250px] w-[250px] ml-[-15px] bg-purple-500 flex items-center justify-center select-none">
            <p className="text-[100px]">
              {currentUser.userName[0] + currentUser.userName[1].toUpperCase()}
            </p>
          </div>
        )}

        <div className="mt-10 text-xl  flex flex-row w-[90%] pl-2 ">
          <InfoIcon />
          <p className="h-[100px] ml-3 mt-[-2px]">
            {currentUser.aboutUser
              ? currentUser.aboutUser
              : "A few words about myself"}
          </p>
        </div>

        <div className="mt-2 text-xl  flex flex-row items-center  w-[90%]  pl-2 h-[40px]">
          <Ahtung />
          <label className="ml-10">{currentUser.email}</label>
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
          <p className="ml-10">Edit profile</p>
        </div>
        <div
          onClick={handleLogout}
          className="mt-2 text-xl  flex flex-row items-center  w-[90%]  
          cursor-pointer select-none hover:bg-skin-button-accent-hover rounded-lg pl-2 h-[40px] "
        >
          <Ahtung />
          <p className="ml-10">Logout</p>
        </div>
      </div>
    </div>
  );
}
