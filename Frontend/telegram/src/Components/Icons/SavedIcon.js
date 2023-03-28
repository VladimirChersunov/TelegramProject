import { useState, useEffect } from "react";

export function SavedIcon(props) {

  const [style, setStyle] = useState("h-5 w-5 stroke-skin-stroke-base  fill-none dark:stroke-skin-stroke-inverted")

 useEffect(()=>{
  if(props.style){
    setStyle((prevStyle) => props.style)
  }
 },[])
  return (
    <svg
    className={`${style} `}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 10V4H8V38L14 35"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 44V10H40V44L27 37.7273L14 44Z"
        fill="none"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
