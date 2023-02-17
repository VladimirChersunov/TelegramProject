import { useNavigate } from "react-router-dom";

export function EnterCode() {
  const navigate = useNavigate();

  return (
    <div className="bg-skin-fill w-[100%] h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[331px] flex flex-col text-center">
        <label className="text-skin-base text-lg w-[100%]">
          Код для подтверждения був надісланий вам на поштову скриньку
        </label>

        <div className="flex flex-row mt-10 justify-around ">
          <input
          maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill text-skin-base border-b-[1px] caret-transparent
             outline-none border-b-[#C6BDFF]"
            placeholder="0"
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill text-skin-base border-b-[1px] caret-transparent
             outline-none border-b-[#C6BDFF]"
            placeholder="1"
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill text-skin-base border-b-[1px] caret-transparent
             outline-none border-b-[#C6BDFF]"
            placeholder="2"
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill text-skin-base border-b-[1px] caret-transparent
             outline-none border-b-[#C6BDFF]"
            placeholder="3"
          />
           <input
            maxLength='1'
            className="w-10 text-center text-5xl bg-skin-fill text-skin-base border-b-[1px] caret-transparent
             outline-none border-b-[#C6BDFF]"
            placeholder="4"
          />
        </div>

        <button
          onClick={() => {
            navigate("/main");
          }}
          className="text-[#0C0221] rounded-3xl w-[200px]
         hover:cursor-pointer hover:bg-white h-[40px] bg-skin-button-accent mx-auto mt-14"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
}
