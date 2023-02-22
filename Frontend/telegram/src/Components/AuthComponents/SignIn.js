import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";

export function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] bg-skin-fill-inverted h-screen flex justify-center text-[16px] font-montserrat content-center items-center">
      <div className="w-[384px]  h-[400px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
        <input
          placeholder="Username or email"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted
        border-b-[1px] outline-none text-skin-inverted pl-2 pb-[10px]"
        />
        <input
          placeholder="Password"
          type='password'
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
        border-b-[1px] outline-none text-skin-inverted mt-[49px] pl-2 pb-[10px]"
        />
        <div className="flex justify-between">
          <button
            onClick={() => {
              navigate("/entercode");
            }}
            className="text-skin-inverted mt-5 text-xs ml-2"
          >
            Recovery password
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="text-skin-inverted mt-5 text-xs mr-2"
          >
            Signup
          </button>
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
