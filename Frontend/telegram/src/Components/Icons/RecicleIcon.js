import { useState, useEffect } from "react";

export function RecicleIcon(props) {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 11L40 11"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 5L30 5"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z"
        fill="none"
        stroke-width="4"
        stroke-linejoin="round"
      />
    </svg>
  );
}
