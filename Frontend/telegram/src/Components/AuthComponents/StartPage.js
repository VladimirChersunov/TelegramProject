import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";

export function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0C0221] w-[100%] h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[400px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />

        <div className="text-[#C6BDFF] font-bold text-center leading-10">
          Вітаємо в офіційному застосунку Cryptic Він швидкий та захищений
        </div>
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className="rounded-3xl hover:bg-skin-button-accent-hover text-[#0C0221] w-[250px] h-[50px]
           bg-[#C6BDFF] mx-auto mt-14"
        >
          Почати спілкування
        </button>
      </div>
    </div>
  );
}
