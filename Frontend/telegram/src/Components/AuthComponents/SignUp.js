import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";

export function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0C0221] w-[100%] h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[400px] flex flex-col ">
      <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
      <input
          placeholder="Email"
          type='email'
          className="bg-[#0C0221] border-b-[#C6BDFF] placeholder:text-skin-muted
        border-b-[1px] outline-none text-skin-base  pl-2"
        />
        <input
          placeholder="Username"
          className="bg-[#0C0221] border-b-[#C6BDFF]  mt-5
        border-b-[1px] outline-none text-skin-base pl-2 placeholder:text-skin-muted"
        />
        <input
          placeholder="Password"
          type="password"
          className="bg-[#0C0221] border-b-[#C6BDFF] placeholder:text-skin-muted
        border-b-[1px] outline-none text-skin-base pl-2 mt-5"
        />
        <input
          placeholder="Confirm password"
          type="password"
          className="bg-[#0C0221] border-b-[#C6BDFF] placeholder:text-skin-muted
        border-b-[1px] outline-none text-skin-base pl-2 mt-5"
        />

      

        <button
          onClick={() => {
            navigate("/entercode");
          }}
          className="rounded-3xl w-[250px]
         hover:cursor-pointer hover:bg-skin-button-accent-hover h-[50px] bg-[#C6BDFF] mx-auto mt-14"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
}
