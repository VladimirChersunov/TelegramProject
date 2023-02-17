import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] bg-skin-fill h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[331px] flex flex-col ">
        <input
          placeholder="Username or email"
          className="bg-skin-fill border-b-white
        border-b-[1px] outline-none text-skin-base pl-2"
        />
        <input
          placeholder="Password"
          className="bg-skin-fill border-b-white
        border-b-[1px] outline-none text-skin-base pl-2 mt-10"
        />
<div className="flex justify-between">
<button onClick={() => {
            navigate("/entercode");
          }} className="text-skin-base mt-5 text-xs ml-2">Recovery password</button>
<button onClick={() => {
            navigate("/signup");
          }} className="text-skin-base mt-5 text-xs mr-2">Signup</button>
</div>
       

        <button
          onClick={() => {
            navigate("/main");
          }}
          className="rounded-3xl text-skin-inverted w-[200px]
         hover:cursor-pointer hover:bg-white h-[40px] bg-skin-button-accent mx-auto mt-14"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
}
