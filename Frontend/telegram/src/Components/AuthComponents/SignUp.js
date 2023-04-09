import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useState, useEffect } from "react";
import { emailCheck, emailUnique } from "../../Services/authService";

export function SignUp(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError("");
    setUsernameError("");
    setPasswordError("");
    setConfirmPasswordError("");
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^.{6,20}$/;
    const usernameRegex = /^.{3,20}$/;
    if (password !== confirmPassword) {
      setConfirmPasswordError("Password mismatch");
    } else {
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address.");
        return;
      }

      if (!usernameRegex.test(username)) {
        setUsernameError("Username must be between 3 and 20 characters");
        return;
      }

      if (!passwordRegex.test(password)) {
        setPasswordError("Password must be between 6 and 20 characters");
        return;
      }
      // отправляем данные на сервер
      setConfirmPasswordError("");
      setPasswordError("");
      setEmailError("");
      setUsernameError("");
      try {
        setIsLoading(true);

        const data = await emailUnique(email, username);

        setError(null);

        if (data.unique) {
          const code = await emailCheck(email);

          props.signUpData({ username, email, password, code });
          navigate("/entercode");
        } else {
          setError("Email or username already exists");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false); // установить состояние isLoading в значение false
      }
    }
  };

  return (
    <div className=" w-[100%] bg-skin-fill-inverted h-screen flex font-montserrat justify-center content-center items-center">
      <div className="w-[384px]  h-[500px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />

        <input
          placeholder="Email"
          type="email"
          value={email}
          maxLength="20"
          onChange={(e) => {
            setEmail((prevValue) => e.target.value);
          }}
          required
          className={`bg-skin-fill-inverted text-[16px]  placeholder:text-skin-muted
          border-b outline-none
          ${
            emailError
              ? "text-skin-error border-skin-border-error"
              : "text-skin-inverted border-skin-border-inverted"
          } 
           mt-[10px] pl-2 pb-[10px]`}
        />
        <div className="h-[20px]">
          {emailError && (
            <label className="text-skin-error text-[12px] pt-1 pl-1">
              {emailError}
            </label>
          )}
        </div>

        <input
          placeholder="Username"
          onChange={(e) => {
            setUsername((prevValue) => e.target.value);
          }}
          required
          maxLength="20"
          className={`bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted  
          ${
            usernameError
              ? "text-skin-error border-skin-border-error"
              : "text-skin-inverted border-skin-border-inverted"
          }
          border-b-[1px] outline-none  mt-[29px] pl-2 pb-[10px] `}
        />
        <div className="h-[20px]">
          {usernameError && (
            <label className="text-skin-error text-[12px] pt-1 pl-1">
              {usernameError}
            </label>
          )}
        </div>

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword((prevValue) => e.target.value);
          }}
          required
          maxLength="20"
          className={`bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted 
          ${
            passwordError
              ? "text-skin-error border-skin-border-error"
              : "text-skin-inverted border-skin-border-inverted"
          }
          border-b-[1px] outline-none  mt-[29px] pl-2 pb-[10px]`}
        />
        <div className="h-[20px]">
          {passwordError && (
            <label className="text-skin-error text-[12px] pt-1 pl-1">
              {passwordError}
            </label>
          )}
        </div>

        <input
          placeholder="Confirm password"
          type="password"
          onChange={(e) => {
            setConfirmPassword((prevValue) => e.target.value);
          }}
          required
          maxLength="20"
          className={`bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted  
          ${
            confirmPasswordError
              ? "text-skin-error border-skin-border-error"
              : "text-skin-inverted border-skin-border-inverted"
          }
          border-b-[1px] outline-none  mt-[29px] pl-2 pb-[10px]`}
        />
        <div className="h-[20px]">
          {confirmPasswordError && (
            <label className="text-skin-error text-[12px] pt-1 pl-1">
              {confirmPasswordError}
            </label>
          )}
        </div>

        {error && (
          <p className="m-0 text-skin-error mt-2 text-center text-xs">
            {error}
          </p>
        )}

        <button
          disabled={isLoading}
          onSubmit={handleSubmit}
          onClick={handleSubmit}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-[36px] tracking-normal"
        >
          {isLoading ? "Loading..." : "Next"}
        </button>
      </div>
    </div>
  );
}
