import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";

export function EnterCode() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0C0221] w-[100%] h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[331px] flex flex-col text-center">
      <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
        <label className="text-[#C6BDFF] text-lg w-[100%]">
          Код для подтверждения був надісланий вам на поштову скриньку
        </label>

        <div className="flex flex-row mt-5 justify-around ">
          <input
          maxLength='1'
            className="w-10 text-center text-5xl bg-[#0C0221] text-[#C6BDFF]  caret-transparent border-b-[1px]
            border-b-[#C6BDFF] placeholder:text-skin-muted 
             outline-none "
            placeholder=""
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-[#0C0221] text-[#C6BDFF] border-b-[1px] caret-transparent
            border-b-[#C6BDFF] placeholder:text-skin-muted 
             outline-none "
            placeholder=""
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-[#0C0221] text-[#C6BDFF] border-b-[1px] caret-transparent
            border-b-[#C6BDFF] placeholder:text-skin-muted 
             outline-none "
            placeholder=""
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-[#0C0221] text-[#C6BDFF] border-b-[1px] caret-transparent
            border-b-[#C6BDFF] placeholder:text-skin-muted 
             outline-none "
            placeholder=""
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-[#0C0221] text-[#C6BDFF] border-b-[1px] caret-transparent
            border-b-[#C6BDFF] placeholder:text-skin-muted 
             outline-none "
            placeholder=""
          />
        </div>

        <button
          onClick={() => {
            navigate("/main");
          }}
          className="text-[#0C0221] rounded-3xl w-[200px]
         hover:cursor-pointer hover:bg-skin-button-accent-hover h-[40px]  bg-[#C6BDFF]
          mx-auto mt-14"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
}
