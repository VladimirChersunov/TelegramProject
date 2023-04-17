import { useState } from "react";

export function ColorRAdioButton({changeThemes}) {

    const [color, setColor] = useState('')

    function onChangeValue(event) {
        setColor(event.target.value);        
        changeThemes(event.target.value)
      }

  return (
    <div className="flex justify-center flex-wrap items-center mt-10" onChange={onChangeValue}>

      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#ec63bc] mx-10" >
        <input
          className="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-[#af2780] checked:border-white focus:outline-none transition duration-200 
            align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer "
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="theme-swiss"
          checked={color === "theme-swiss"}
        />
       
      </div>


      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#73d651] mr-10">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-[#599e42] checked:border-white focus:outline-none transition duration-200
             align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="theme-neon"
          checked={color === "theme-neon"}
        />
       
      </div>
      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#57b8be] mr-10">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-[#278388] checked:border-white focus:outline-none transition duration-200
            align-top bg-no-repeat bg-center bg-contain float-left "
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="theme-blue"
          checked={color === "theme-blue"}
        />
       
      </div>
      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#C6BDFF] mr-10 mt-5">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-[#0C0221] checked:border-white focus:outline-none transition duration-200
            align-top bg-no-repeat bg-center bg-contain float-left "
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value=""
          checked={color === ""}
        />      
      </div>
      <div className="w-[50px] h-[100px] flex items-center justify-center border bg-[#0C0221] mt-5">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-[#372264] checked:border-white focus:outline-none transition duration-200
           align-top bg-no-repeat bg-center bg-contain float-left "
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value=""
          checked={color === ""}
        />      
      </div>
    </div>
  );
}
