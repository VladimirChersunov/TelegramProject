import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";

export function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] bg-[#0C0221] h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[400px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
        <input
          placeholder="Username or email"
          className="bg-[#0C0221] placeholder:text-skin-muted border-b-[#C6BDFF]
        border-b-[1px] outline-none text-[#C6BDFF] pl-2 pb-1"
        />
        <input
          placeholder="Password"
          type='password'
          className="bg-[#0C0221] placeholder:text-skin-muted border-b-[#C6BDFF] 
        border-b-[1px] outline-none text-[#C6BDFF] pl-2 mt-10 pb-1"
        />
        <div className="flex justify-between">
          <button
            onClick={() => {
              navigate("/entercode");
            }}
            className="text-[#C6BDFF] mt-5 text-xs ml-2"
          >
            Recovery password
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="text-[#C6BDFF] mt-5 text-xs mr-2"
          >
            Signup
          </button>
        </div>

        <button
          onClick={() => {
            navigate("/main");
          }}
          className="rounded-3xl  w-[250px]
         hover:cursor-pointer hover:bg-skin-button-accent-hover h-[50px] bg-[#C6BDFF] mx-auto mt-[40px]"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
}
