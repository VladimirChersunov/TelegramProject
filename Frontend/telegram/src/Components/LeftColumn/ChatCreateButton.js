import { useState, useEffect, useRef } from "react";


export function ChatCreateButton() {
//   useEffect(() => {
//     document.addEventListener("click", handleClickOutsideCreateMenu, true);
//     console.log(true)
//   }, []);

  const [open, setOpen] = useState(false);
  const refCreateMenu = useRef(null);

//   const handleClickOutsideCreateMenu = (e) => {
//     if (!refCreateMenu.current.contains(e.target)) {
//       console.log("click out");
//       setOpen(false);
//       document.removeEventListener("click", handleClickOutsideCreateMenu, true);
//     } else {
//       console.log("click in");
//     }
//   };
  return (
    <div className="p-1 pt-3 ml-[80%]">
      <div ref={refCreateMenu} className="inline-block  relative">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="m-auto bg-blue-300 text-2xl w-[50px] h-[50px] hover:cursor-pointer pt-2
             rounded-full  hover:bg-blue-600 hover:shadow-xl hover:border hover:border-black items-center text-center"
        >
          {open && <p> &#10006;</p>}
          {!open && <p> &#128394;</p>}
        </div>

        <ul
          id="leftMenu"
          className={`absolute mt-[-150px] ml-[-150px] ${
            open ? "block" : "hidden"
          }    group-hover:block shadow-2xl bg-white border border-slate-400 rounded-lg  w-[200px] `}
        >
          <li onClick={()=>{}} className="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
              &#128226;
              <p className="font-bold ml-2">New Channel</p>
            </div>
          </li>
          <li onClick={()=>{}} className="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
              &#128101;
              <p className="font-bold ml-2">New Group</p>
            </div>
          </li>
          <li onClick={()=>{}} className="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
              &#128100;
              <p className="font-bold ml-2">New Message</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
