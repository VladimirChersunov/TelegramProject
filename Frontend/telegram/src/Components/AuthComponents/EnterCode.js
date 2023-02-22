import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";

export function EnterCode() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0C0221] w-[100%] h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[331px] flex flex-col text-center">
      <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
        <label className="text-[18px] text-skin-inverted text-center font-medium leading-[27px] tracking-normal">
          Код для подтверждения був надісланий вам на поштову скриньку
        </label>

        <div className="flex flex-row mt-5 justify-around ">
          <input
          maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
             caret-transparent border-b-[1px] pb-[10px]
            placeholder:text-skin-muted border-skin-border-inverted
             outline-none "
            placeholder=""
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
        </div>

        <button
          onClick={() => {
            navigate("/main");
          }}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
}
