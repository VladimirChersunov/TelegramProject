import React, { useState, useEffect } from "react";
import { login } from "../../Actions/authServiceG";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";


function LoginForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameOrEmailValid, setIsUsernameOrEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Проверяем правильность введенного username или email
    const usernameOrEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$|^[a-zA-Z0-9]{6,20}$/;
    if (!usernameOrEmailRegex.test(usernameOrEmail)) {
      setIsUsernameOrEmailValid(false);
      return;
    } else {
      setIsUsernameOrEmailValid(true);
    }

    // Проверяем правильность введенного пароля
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    if (!passwordRegex.test(password)) {
      setIsPasswordValid(false);
      return;
    } else {
      setIsPasswordValid(true);
    }

    // Отправляем данные на сервер
    try {
        const data = await login(username, password);
        console.log('Logged in:', data);
      } catch (error) {
        setError(error.message);
      }
    console.log("Данные отправлены: ", usernameOrEmail, password);
    navigate("/main");
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
  if(!isPasswordValid){
    setPassword("")
  }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex justify-center flex-col select-none">
     
     <div className="relative">
          <input
            type="text"
            placeholder="Username or email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            className={`border-b  ${
              isUsernameOrEmailValid ? "border-skin-border-inverted text-skin-inverted" : "border-red-600 text-red-600"
            } bg-skin-fill-inverted pl-2 pb-[10px]  w-full focus:outline-none text-[16px] placeholder:text-skin-muted`}
            required
          />    
         {!isUsernameOrEmailValid && <p className="text-red-600 text-xs mt-1">Incorrect input</p> }
       
          <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border-b ${
              isPasswordValid ? "border-skin-border-inverted text-skin-inverted"  : "border-red-600 text-red-600"
            }  text-[16px] bg-skin-fill-inverted placeholder:text-skin-muted w-full outline-none  mt-[49px] pl-2 pb-[10px]`}
            required
          />
             <div
          className="absolute top-[95px] right-[0px] cursor-pointer bg-white h-5 w-5"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </div>
         </div>
        {! isPasswordValid&& <p className="text-red-600 text-xs mt-1">Incorrect input</p>}
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

         {error&&<p>{error}</p>}
        <button
         type="submit"    
         onClick={()=>{  navigate("/main");}}     
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          Next
        </button>

    
    </form>
  );
}

export default LoginForm;
