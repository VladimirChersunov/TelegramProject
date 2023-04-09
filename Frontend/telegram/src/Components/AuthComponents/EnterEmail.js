import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useState } from "react";
import { emailCheck } from "../../Services/authService";

export function EnterEmail({ recoveryData }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (input) => {
    // Email validation regex pattern
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(input);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      setButtonDisabled((prev) => true);
      const data = await emailCheck(email);
      recoveryData(data);
      navigate("/entercode");
    } catch (error) {
      setButtonDisabled((prev) => false);
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value === "") {
      setError("");
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
          autoComplete="off"
          
          onChange={handleEmailChange}
          className={`border-b 
             border-skin-border-inverted 
             text-skin-inverted  
             bg-skin-fill-inverted 
             pl-2 
             pb-[10px]  
             w-full 
             focus:outline-none 
             text-[16px] 
             placeholder:text-skin-muted 
             ${error && 'border-skin-border-error text-skin-error'}
          `}
          required
        />

        {error && (
          <label className="text-skin-error text-sm mt-2">
            {error}
          </label>
        )}

        <button
          onClick={handleSubmit}
          disabled={buttonDisabled}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
           w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          Recovery
        </button>
      </div>
    </div>
  );
}
