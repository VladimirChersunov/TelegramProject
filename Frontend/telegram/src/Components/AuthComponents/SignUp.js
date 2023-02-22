import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";

export function SignUp() {
  const navigate = useNavigate();

  return (
    <div className=" w-[100%] bg-skin-fill-inverted h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[500px] flex flex-col ">
      <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
      <input
          placeholder="Email"
          type='email'
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[10px] pl-2 pb-[10px]"
        />
        <input
          placeholder="Username"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[49px] pl-2 pb-[10px]"
        />
        <input
          placeholder="Password"
          type="password"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[49px] pl-2 pb-[10px]"
        />
        <input
          placeholder="Confirm password"
          type="password"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[49px] pl-2 pb-[10px]"
        />

      

        <button
          onClick={() => {
            navigate("/entercode");
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
