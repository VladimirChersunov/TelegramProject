import logo from "./../../Assets/Logo.svg";
import LoginForm from "./LoginForm";
import { useLocation } from "react-router-dom";


export function SignIn({setTokenCallback}) {
  const location = useLocation();
  const language = location.state?.language;
  

 

  return (
    <div className="w-[100%] bg-skin-fill-inverted h-screen flex justify-center text-[16px] font-montserrat content-center items-center">
      <div className="w-[384px]  h-[400px] flex flex-col items-center ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
        <LoginForm setTokenCallback={setTokenCallback} language={language}/>
      </div>
    </div>
  );
}
