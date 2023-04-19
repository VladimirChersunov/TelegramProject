import { useState, useEffect } from "react";

export function ColorRAdioButton({ changeThemes, darkMode, toggleDarkMode }) {
  const [color, setColor] = useState(localStorage.getItem("theme") || "");
  const isDark = darkMode;

  useEffect(() => {
   
  }, [color]);

  function onChangeValue(event) {
   
    if (isDark) {
      toggleDarkMode(false);
      localStorage.setItem('darkMode', false)
    }
    setColor(event.target.value);
    changeThemes(event.target.value);
    localStorage.setItem("theme", event.target.value); // сохраняем выбранную тему в localStorage
  }

  const handleDarkMode = () => {
    toggleDarkMode(true);
    changeThemes("");
    localStorage.setItem('darkMode', true)
  };

  

  return (
    <div
      className="flex justify-center flex-wrap items-center mt-10"
      onChange={onChangeValue}
    >
      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#ec63bc] mx-10 rounded-lg border-black shadow-2xl">
        <input
          className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 
            align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer "
          type="radio"
          name="inlineRadioOptions"
          value="theme-swiss"
          defaultChecked={(color === "theme-swiss") && !isDark}
        />
      </div>

      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#73d651] mr-10 rounded-lg border-black shadow-2xl">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200
             align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          value="theme-neon"
          defaultChecked={color === "theme-neon"}
        />
      </div>
      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#57b8be] mr-10 rounded-lg border-black shadow-2xl">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 cursor-pointer
            align-top bg-no-repeat bg-center bg-contain float-left "
          type="radio"
          name="inlineRadioOptions"
          value="theme-blue"
          defaultChecked={color === "theme-blue"}
        />
      </div>
      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#C6BDFF] mr-10 mt-5 rounded-lg border-black shadow-2xl">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-skin-button-accent-hover  checked:border-white focus:outline-none transition duration-200 cursor-pointer
            align-top bg-no-repeat bg-center bg-contain float-left "
          type="radio"
          name="inlineRadioOptions"
          value=""
          defaultChecked={color === ""}
        />
      </div>
      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#0C0221] mt-5 rounded-lg border-white shadow-2xl">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-skin-button-accent-hover checked:border-white focus:outline-none transition duration-200 cursor-pointer
           align-top bg-no-repeat bg-center bg-contain float-left "
          type="radio"
          name="inlineRadioOptions"
          defaultChecked={isDark}
          onChange={handleDarkMode}
        />
      </div>
    </div>
  );
}
