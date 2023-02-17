import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="bg-skin-fill w-[100%] h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[331px] flex flex-col ">
      <input
          placeholder="Email"
          className="bg-skin-fill border-b-white
        border-b-[1px] outline-none text-skin-base  pl-2"
        />
        <input
          placeholder="Username"
          className="bg-skin-fill border-b-white  mt-10
        border-b-[1px] outline-none text-skin-base pl-2"
        />
        <input
          placeholder="Password"
          type="password"
          className="bg-skin-fill border-b-white
        border-b-[1px] outline-none text-skin-base pl-2 mt-10"
        />
        <input
          placeholder="Confirm password"
          type="password"
          className="bg-skin-fill border-b-white
        border-b-[1px] outline-none text-skin-base pl-2 mt-10"
        />

      

        <button
          onClick={() => {
            navigate("/entercode");
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
