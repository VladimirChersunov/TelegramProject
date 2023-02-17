import { useNavigate } from "react-router-dom";

export function AuthPage() {
    const navigate = useNavigate();   

  return (
    <div className="bg-skin-fill w-[100%] h-screen flex justify-center content-center items-center">
      <div className="w-[384px]  h-[331px] flex flex-col ">
        <p className="text-5xl text-skin-base font-extrabold tracking-wider font-serif text-center mb-10">cryptic</p>
        <div className="text-skin-base font-bold text-center leading-10">
          Вітаємо в офіційному застосунку Cryptic Він швидкий та захищений
        </div>
        <button onClick={()=>{navigate("/signin")}} className="rounded-3xl text-skin-inverted w-[250px] h-[50px] bg-skin-button-accent mx-auto mt-14">Почати спілкування</button>
      </div>
    </div>
  );
}
