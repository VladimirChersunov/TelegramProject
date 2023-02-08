import { useState } from "react";
import Switch from "../LeftColumn/Switch";
import live from "./../../Assets/live.jpg";

export function RightColumn() {
  const [open, setOpen] = useState(true);
  const [type, setType] = useState(true);
  //   if (type) {
  //     setType(true);
  //   }

  return (
    <div
      className={`w-[35%] ${open ? "block" : "hidden"}  border border-l-black`}
    >
      <div
        name="rightHeader"
        className="h-[59px] w-[100%] flex flex-row justify-between border border-b-black px-2 items-center "
      >
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className=" hover:bg-slate-300 rounded-full p-auto h-[40px] w-[40px]"
        >
          &#10006;
        </button>
        <label className="text-2xl font-bold text-center">Info</label>
        {true && (
          <button className=" hover:bg-slate-300 rounded-full p-auto  h-[40px] w-[40px]">
            &#128394;
          </button>
        )}
      </div>
      <div className="h-[100%]  ">
        <img src={live} alt="logo" className=" mr-2 h-[50%] w-[100%] " />
        <div className="flex flex-row ">
          <div className="text-3xl ml-5 mt-5">&#128712;</div>
          <p className="ml-5 mt-5 font-bold">
            Контент ежедневно с 2013 года 🔹Ссылка на канал -
            https://t.me/+8Rah-lb7Q6Y2MjQy 🔹Связь с админом (размещение
            рекламы, сообщить новость) - @macuse
          </p>
        </div>
        <div className="flex flex-row h-[40px] w-[100%] px-2 items-center justify-between mt-2">
          <button className="text-2xl ml-5 mt-5">&#128264;</button>
          <label className="text-2xl text-left">Notifications</label>
          <Switch />
        </div>
      </div>
    </div>
  );
}
