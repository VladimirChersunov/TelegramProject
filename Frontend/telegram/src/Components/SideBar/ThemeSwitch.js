import { useEffect, useState } from "react";

export function ThemeSwitch({darkMode,toggleDarkMode,changeThemes}) {
  const [toggle, setToggle] = useState(darkMode);
  const toggleClass = "transform translate-x-5";  

  useEffect(() => {
    if(toggle){      
      toggleDarkMode(toggle);
      changeThemes("")
      localStorage.setItem('darkMode', true)
    }else{
      toggleDarkMode(toggle);
      changeThemes(localStorage.getItem('theme'))
      localStorage.setItem('darkMode', false)
    }
    
  }, [toggle,changeThemes,darkMode,toggleDarkMode]);
  

  const handelClick = () => {
    setToggle((prevToggle) => !toggle);   
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
            " h-4 w-4 rounded-full shadow-md transform duration-300  ease-in-out bg-skin-button-accent-hover dark:bg-skin-fill-inverted" +
            (toggle ? toggleClass : null)
          }
        ></div>
      </div>
    </>
  );
}
