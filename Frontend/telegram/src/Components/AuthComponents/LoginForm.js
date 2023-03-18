import React, { useState, useEffect } from "react";
import { login } from "../../Actions/authService";
import { useNavigate } from "react-router-dom";
import { PreviewClose } from "../Icons/PreviewClose";
import { PreviewOpen } from "../Icons/PreviewOpen";



function LoginForm() {

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();   
    
    try {
      setIsLoading(true); 
        const data = await login(usernameOrEmail, password);
        setError(null);
       
       if(data.user.id){
        navigate("/main");
       }
      } catch (error) {
        setError(error.message);
      }
      finally {
        setIsLoading(false); // установить состояние isLoading в значение false
      }
   
  };

  const handleShowPasswordClick = () => {
    setShowPassword((prev)=>!showPassword);
  };

  const handleUsernameInput = (e) =>{
    setUsernameOrEmail((prevValue)=>e.target.value)
   
  }

 

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="flex justify-center flex-col select-none">
     
     <div className="relative">
          <input
            type="text"
            placeholder="Username or email"
            value={usernameOrEmail}
            autoComplete="off"
            onChange={handleUsernameInput }
            className={`border-b  border-skin-border-inverted text-skin-inverted
             bg-skin-fill-inverted pl-2 pb-[10px]  w-full focus:outline-none text-[16px] placeholder:text-skin-muted `}
            required
          />    
        
       
          <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword((prevValue)=>e.target.value)}
            className={`border-b border-skin-border-inverted text-skin-inverted text-[16px]
             bg-skin-fill-inverted placeholder:text-skin-muted w-full outline-none  mt-[49px] pl-2 pb-[10px]`}
            required
          />
             <div
          className={`absolute top-[80px] right-[5px] cursor-pointer`}
          onClick={handleShowPasswordClick}
        >
          {showPassword ? <PreviewClose/> : <PreviewOpen/>}
        </div>
         </div>
       
        {error&&<p className="m-0 text-skin-error mt-2 text-center text-xs">{error}</p>}
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              navigate("/recovery");
            }}
            className="text-skin-inverted mt-5 text-[16px ml-2 border-b hover:text-slate-200 border-skin-border-inverted"
          >
            Forgot your password?
          </button>
         
        </div>

       
        <button
        disabled={isLoading}
         type="submit"    
         onClick={ handleSubmit}     
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
         {isLoading ? "Loading..." : "Next"}
        </button>

        <button
         type="submit"    
         onClick={() => {
          navigate("/signup");
        }}   
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-inverted text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill-inverted mx-auto mt-14 tracking-normal border border-skin-border-inverted"
        >
         Signup
        </button>
    
    </form>
  );
}

export default LoginForm;
