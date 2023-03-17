import { useState, useEffect } from "react";

export function EnterIcon(props) {
  const [style, setStyle] = useState("h-5 w-5 stroke-skin-stroke-base  fill-none dark:stroke-skin-stroke-inverted")
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
      <path
        d="M12 12L24 24L12 36"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 12L36 24L24 36"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
