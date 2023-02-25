import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useState, useEffect } from "react";

export function SignUp() {
  const navigate = useNavigate();
 
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [emailPlaceholderColor, setEmailPlaceholderColor] =
    useState("text-skin-muted");
  const [email, setEmail] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        alert("Некорректный email");
        return;
      }
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
      if (!passwordRegex.test(password)) {
        alert(
          "Пароль должен содержать как минимум 6 символов, включая цифры и буквы"
        );
        return;
      }
      // отправляем данные на сервер
      console.log("Данные отправлены: ", username, email, password);
    }
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
        <input
          placeholder="Username"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[49px] pl-2 pb-[10px]"
        />
        <input
          placeholder="Password"
          type="password"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[49px] pl-2 pb-[10px]"
        />
        <input
          placeholder="Confirm password"
          type="password"
          className="bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted border-skin-border-inverted 
          border-b-[1px] outline-none text-skin-inverted mt-[49px] pl-2 pb-[10px]"
        />

        <button
          onSubmit={handleSubmit}
          onClick={() => {
            navigate("/entercode");
          }}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
}
