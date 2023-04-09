import { useState, useEffect } from "react";

export function CloseIcon(props) {
  const [style, setStyle] = useState(
    "h-5 w-5 stroke-skin-stroke-base   fill-none dark:stroke-skin-stroke-inverted"
  );

  useEffect(() => {
    if (props.style) {
      setStyle((prevStyle) => props.style);
    }
  },[props.style]);

  return (
    <svg
      className={`${style} `}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 8L40 40"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 40L40 8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
