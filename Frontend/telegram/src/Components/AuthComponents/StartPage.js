import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";

export function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-skin-fill-inverted w-[100%] h-screen flex justify-center font-montserrat content-center items-center">
      <div className="w-[384px]  h-[400px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />

        <div className="text-[18px] text-skin-inverted text-center font-medium leading-[27px] tracking-normal">
          Вітаємо в офіційному застосунку Cryptic Він швидкий та захищений
        </div>
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
           w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          Почати спілкування
        </button>
      </div>
    </div>
  );
}
