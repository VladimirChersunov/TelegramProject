import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useState } from "react";
import { emailCheck, emailUnique } from "../../Actions/authService";

export function EnterEmail({ recoveryData }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Проверяем правильность введенного username или email
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$|^[a-zA-Z0-9]{6,20}$/;
    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      return;
    } else {
      setIsEmailValid(true);
    }

    try {
      const data = await emailCheck(email);

      setError(null);

      recoveryData(data);
      navigate("/entercode");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-skin-fill-inverted w-[100%] h-screen flex justify-center font-montserrat content-center items-center">
      <div className="w-[384px]  h-[400px] flex flex-col ">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />

        <label className="text-skin-inverted text-lg mb-10 text-center">
          Enter your email to reset your password
        </label>

        <input
          type="text"
          placeholder="email"
          value={email}
          autocomplete="off"
          onChange={(e) => setEmail(e.target.value)}
          className={`border-b  ${
            isEmailValid
              ? "border-skin-border-inverted text-skin-inverted"
              : "border-red-600 text-red-600"
          } bg-skin-fill-inverted pl-2 pb-[10px]  w-full focus:outline-none text-[16px] placeholder:text-skin-muted `}
          required
        />
        {error && (
          <p className="m-0 text-skin-error mt-2 text-center text-xs">
            {error}
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
           w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          Recovery
        </button>
      </div>
    </div>
  );
}
