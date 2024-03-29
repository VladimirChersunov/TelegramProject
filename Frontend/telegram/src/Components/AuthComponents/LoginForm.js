import { useState, useEffect } from "react";
import { login } from "../../Services/authService";
import { useNavigate } from "react-router-dom";
import { PreviewClose } from "../Icons/PreviewClose";
import { PreviewOpen } from "../Icons/PreviewOpen";
import { useTranslation } from "react-i18next";

function LoginForm({setTokenCallback,language}) {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n,language]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const data = await login(usernameOrEmail, password);
      setError(null);

      const token = data.token;
      if (data.user) {
        if(setTokenCallback)
        setTokenCallback(token)       
        navigate("/main", { state: { token:token, language: language } });
      }
    } catch (error) {
      console.log(error);
      if(error){
        setError(error.message);
        if(error.message==='Network Error'){
          navigate('/error')
        }
      }
     
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowPasswordClick = () => {
    setShowPassword((prev) => !showPassword);
  };

  const handleUsernameInput = (e) => {
    setUsernameOrEmail((prevValue) => e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="flex w-full  flex-col select-none items-center justify-center sm:w-screen"
    >
      <div className="relative flex w-full flex-col sm:w-[90%]">
        <input
          type="text"
          tabIndex='1'
          placeholder={t("signinPage.placeholder1")}
          value={usernameOrEmail}
          autoComplete="off"
          onChange={handleUsernameInput}
          className={`border-b  border-skin-border-inverted text-skin-inverted 
             bg-skin-fill-inverted pl-2 pb-[10px]  w-full focus:outline-none text-[16px] placeholder:text-skin-muted `}
          required
        />

        <input
          placeholder={t("signinPage.placeholder2")}
          type={showPassword ? "text" : "password"}
          value={password}
          tabIndex='2'
          autoComplete="off"
          onChange={(e) => setPassword((prevValue) => e.target.value)}
          className={`border-b border-skin-border-inverted text-skin-inverted text-[16px]
             bg-skin-fill-inverted placeholder:text-skin-muted w-full outline-none  mt-[49px] pl-2 pb-[10px]`}
          required
        />
        <div
          className={`absolute top-[80px] right-[5px] cursor-pointer`}
          onClick={handleShowPasswordClick}
        >
          {showPassword ? <PreviewClose /> : <PreviewOpen />}
        </div>
      </div>

      {error && (
        <p className="m-0 text-skin-error mt-2 text-center text-xs">{error}</p>
      )}
      <div className="flex items-center justify-center">
        <div
        tabIndex='5'
          onClick={() => {
            navigate("/recovery", { language: language });
          }}
          className="text-skin-inverted mt-5 text-[16px ml-2 border-b hover:text-slate-200 border-skin-border-inverted cursor-pointer"
        >
          {t("signinPage.recaveryLink")}
        </div>
      </div>

      <button
      tabIndex='3'
        disabled={isLoading}
        type="submit"
        onClick={handleSubmit}
        className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] sm:w-[200px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
      >
        {isLoading ? `${t("signinPage.btnLoading")}` : `${t("signinPage.btnNext")}`}
      </button>

      <button
        type="submit"
        tabIndex='4'
        onClick={() => {
          navigate("/signup", { language: language });
        }}
        className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-inverted text-[17px] font-medium
          w-[250px] sm:w-[200px] h-[50px] leading-[26px] bg-skin-fill-inverted mx-auto mt-14 tracking-normal border border-skin-border-inverted"
      >
         {t("signinPage.btnSignUp")}
      </button>
    </form>
  );
}

export default LoginForm;
