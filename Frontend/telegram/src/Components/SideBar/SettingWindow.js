import { BackArrowIcon } from "../Icons/BackArrowIcon";
import art from "./../../Assets/art.jpg";
import { useNavigate } from "react-router-dom";

export function SettingWindow(props) {
const navigate = useNavigate()

  const handleClickBack = () => {
    props.visibleSetting(false);
  };

  const handleLogout = () =>{   
    localStorage.clear();
    navigate('/signin')
  }
  return (
    <div className="flex flex-col">
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
        <div className="mt-5 text-lg ml-5">
          <label>Email</label>
        </div>
        <div className="mt-1 text-lg ml-5">
          <label>Username</label>
        </div>
        <div className="mt-1 text-lg ml-5 cursor-pointer select-none">
          <p>Premium</p>
        </div>
        <div className="mt-1 text-lg ml-5 cursor-pointer select-none">
          <p>Edit profile</p>
        </div>
        <div 
        onClick={handleLogout}
        className="mt-1 text-lg ml-5 cursor-pointer select-none">
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
