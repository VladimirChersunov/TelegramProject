import { useState, useEffect } from "react";

export function PenIcon(props) {
  
const [style, setStyle] = useState("h-5 w-5 stroke-skin-stroke-base   fill-none dark:stroke-skin-stroke-inverted")
 useEffect(()=>{
  if(props.style){
    setStyle((prevStyle) => props.style)
  }
 })

  return (
    <svg
      className={`${style} `}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#icon-01804d552696ccc)">
        <path
          d="M30.9995 8.99902L38.9995 16.999"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.99953 31.999L35.9994 4L43.9995 11.999L15.9995 39.999L5.99951 41.999L7.99953 31.999Z"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.9995 8.99902L38.9995 16.999"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.99951 31.999L15.9995 38.999"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.9995 34.999L34.9995 12.999"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="icon-01804d552696ccc">
          <rect width="48" height="48" fill="#1F0850" />
        </clipPath>
      </defs>
    </svg>
  );
}
