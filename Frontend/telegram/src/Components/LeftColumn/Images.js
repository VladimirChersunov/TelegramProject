import { useState } from "react";
import art from "./../../Assets/art.jpg";
import live from "./../../Assets/live.jpg";
import arduino from "./../../Assets/arduino.jpg";


export function Images({chat}){

    const images = [art, live, arduino]

    return(
        <img src={live} alt="logo" className="rounded-full mr-2 h-[50px] w-[50px]" />
    )
}