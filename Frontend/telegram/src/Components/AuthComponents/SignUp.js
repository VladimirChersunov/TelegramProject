import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useState, useEffect } from "react";
import { emailCheck, emailUnique, register } from "../../Actions/authService";

export function SignUp(props) {
  const navigate = useNavigate();

  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [emailPlaceholderColor, setEmailPlaceholderColor] =
    useState("text-skin-muted");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;

    // if (password !== confirmPassword) {
    //   setConfirmPasswordError(true);
    // }
    //  else {
    //   if (!emailRegex.test(email)) {
    //     alert("Некорректный email");
    //     return;
    //   }

    //   if (!passwordRegex.test(password)) {
    //     alert(
    //       "Password must contain at least 6 characters, including numbers and letters"
    //     );
    //     return;
    //   }
    //   // отправляем данные на сервер
    //   setConfirmPasswordError(false);

    // }

    try {
      const data = await emailUnique(username, email);

      setError(null);

      if (data.unique) {
        const code = await emailCheck(email);

        props.signUpData({ username, email, password, code });
        navigate("/entercode");
      }
    } catch (error) {
      setError(error.message);
    }

    console.log("Данные отправлены: ", username, email, password);
  };

  return (
    <div className=" w-[100%] bg-skin-fill-inverted h-screen flex font-montserrat justify-center content-center items-center">
      <div className="w-[384px]  h-[500px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />

        <input
          placeholder={`${emailPlaceholder}`}
          type="email"
          value={email}
          maxlength="20"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          className={`bg-skin-fill-inverted text-[16px] placeholder:${emailPlaceholderColor} border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[10px] pl-2 pb-[10px]`}
        />
        <div className="h-[20px]">
          {emailError && (
            <label className="text-skin-error text-[12px] pt-1 pl-1">
              Email error
            </label>
          )}
        </div>

        <input
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          maxlength="20"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[29px] pl-2 pb-[10px] "
        />
        <div className="h-[20px]">
          {usernameError && (
            <label className="text-skin-error text-[12px] pt-1 pl-1">
              Username error
            </label>
          )}
        </div>

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          maxlength="20"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[29px] pl-2 pb-[10px]"
        />
        <div className="h-[20px]">
          {passwordError && (
            <label className="text-skin-error text-[12px] pt-1 pl-1">
              Password error
            </label>
          )}
        </div>

        <input
          placeholder="Confirm password"
          type="password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          maxlength="20"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[29px] pl-2 pb-[10px]"
        />
        <div className="h-[20px]">
          {confirmPasswordError && (
            <label className="text-skin-error text-[12px] pt-1 pl-1">
              Password error
            </label>
          )}
        </div>

        {error && (
          <p className="m-0 text-skin-error mt-2 text-center text-xs">
            {error}
          </p>
        )}

        <button
          onSubmit={handleSubmit}
          onClick={handleSubmit}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-[36px] tracking-normal"
        >
          Next
        </button>
      </div>
    </div>
  );
}
