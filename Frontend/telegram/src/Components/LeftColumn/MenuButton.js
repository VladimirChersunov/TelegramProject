import { useState } from "react";

export function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-1 pt-3">
      <div className="inline-block  relative">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="m-auto text-4xl w-[40px] h-[40px] rounded-full pb-[5px] hover:shadow-xl hover:border-emerald-300"
        >
          &#8801;
        </button>
        {console.log(open)}

        <ul
          class={`absolute ${
            open ? "block" : "hidden"
          }   mt-1 group-hover:block shadow-2xl bg-white border border-slate-400 rounded-lg  w-[200px] `}
        >
          <li class="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
            &#9960;
            <p className="font-bold ml-2">Saved Messsages</p>
            </div>
          </li>
          <li class="hover:bg-gray-200 hover:cursor-pointer">
            <div className="h-8 p-1 flex flex-row">
            &#xf2b9;
            <p className="font-bold ml-2">Contacts</p>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
