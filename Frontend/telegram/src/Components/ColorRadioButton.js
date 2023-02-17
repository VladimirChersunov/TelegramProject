import { useState } from "react";

export function ColorRAdioButton(props) {

    const [color, setColor] = useState('')

    function onChangeValue(event) {
        setColor(event.target.value);
        //console.log(event.target.value);
        props.changeThemes(event.target.value)
      }

  return (
    <div class="flex justify-center mt-10" onChange={onChangeValue}>
      <div class="form-check form-check-inline" >
        <input
          class="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1
            align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="theme-swiss"
          checked={color === "theme-swiss"}
        />
        <label
          class="form-check-label inline-block text-red-600 mr-5"
          for="inlineRadio10"
        >
          Red
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200
            mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="theme-neon"
          checked={color === "theme-neon"}
        />
        <label
          class="form-check-label inline-block text-green-600 mr-5"
          for="inlineRadio20"
        >
          Green
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300
           bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200
            mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="theme-blue"
          checked={color === "theme-blue"}
        />
        <label
          class="form-check-label inline-block text-blue-600 opacity-50"
          for="inlineRadio30"
        >
         Blue
        </label>
      </div>
    </div>
  );
}
