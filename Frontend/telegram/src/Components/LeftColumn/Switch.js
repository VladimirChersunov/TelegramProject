import { useState } from "react";

export function Switch() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
  return (
    <>
      <div
        className="md:w-11 md:h-5 w-12 h-5 flex items-center
           bg-white rounded-full border border-slate-300 p-1 cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* Switch */}
        <div
          className={
            "bg-slate-600 md:w-4 md:h-4 h-2 w-2 rounded-full shadow-md transform duration-300 ease-in-out" +
            (toggle ? null : toggleClass)
          }
        ></div>
      </div>
    </>
  );
}

export default Switch;
