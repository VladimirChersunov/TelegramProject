import { useState } from "react";

export function ThemeSwitch(props) {
  const [toggle, setToggle] = useState(props.darkMode);
  const toggleClass = " transform translate-x-5";  
  

  const handelClick = () => {
    setToggle((prevToggle) => !toggle);
    props.toggleDarkMode();
  };
  return (
    <>
      <div
        className=" w-12 h-5 flex items-center
           bg-white rounded-full  p-1 cursor-pointer"
        onClick={handelClick}
      >
        {/* Switch */}
        <div
          className={
            " h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out bg-slate-600 dark:bg-[#0C0221]" +
            (toggle ? toggleClass : null)
          }
        ></div>
      </div>
    </>
  );
}
