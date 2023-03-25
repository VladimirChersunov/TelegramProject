import { BackArrowIcon } from "../Icons/BackArrowIcon";
import art from "./../../Assets/art.jpg";
import { useNavigate } from "react-router-dom";
import { Ahtung } from "../Icons/Ahtung";
import { PenIcon } from "../Icons/PenIcon";
import { PeopleIcon } from "../Icons/PeopleIcon";
import { useState, useEffect } from "react";
import { updateInfo } from "../../Services/userServices";

export function SettingWindow(props) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        setIsLoading(true);
        const data = await updateInfo();
        setCurrentUser(data.user);
      } catch {
        console.log("error");
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    data();
  }, []);

  const handleClickBack = () => {
    props.visibleSetting(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="flex flex-col w-[350px]">
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

      <div className="w-full text-center  flex flex-col items-start mt-5">
        <img src={art} alt="logo" className="h-[300px] w-full select-none" />
        <div className="mt-5 text-xl ml-5 flex flex-row items-center border-b w-[90%] pb-2 border-skin-border-base dark:border-skin-border-inverted">
          <Ahtung />
          <label className="ml-10">{currentUser.email}</label>
        </div>
        <div className="mt-5 text-xl ml-5 flex flex-row items-center border-b w-[90%] pb-2 border-skin-border-base dark:border-skin-border-inverted">
          <PeopleIcon />
          <label className="ml-10">{currentUser.userName}</label>
        </div>
        <div
          className="mt-5 text-xl ml-5 flex flex-row items-center border-b w-[90%] pb-2 border-skin-border-base
         cursor-pointer select-none dark:border-skin-border-inverted"
        >
          <Ahtung />
          <p className="ml-10">Premium</p>
        </div>
        <div
          className="mt-5 text-xl ml-5 flex flex-row items-center border-b w-[90%] pb-2 border-skin-border-base
         dark:border-skin-border-inverted cursor-pointer select-none"
        >
          <PenIcon />
          <p className="ml-10">Edit profile</p>
        </div>
        <div
          onClick={handleLogout}
          className="mt-5 text-xl ml-5 flex flex-row items-center border-b w-[90%] pb-2 border-skin-border-base
         dark:border-skin-border-inverted cursor-pointer select-none"
        >
          <Ahtung />
          <p className="ml-10">Logout</p>
        </div>
      </div>
    </div>
  );
}
