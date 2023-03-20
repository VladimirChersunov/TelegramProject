import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useState, useEffect } from "react";
import { setNewPassword } from "../../Services/authService";

export function SetNewPassword({ email }) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPasswordError("");
    setConfirmPasswordError("");
    setError(null);
  }, [password, confirmPassword]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setPasswordError("");
    setConfirmPasswordError("");
    setError(null);

    const passwordRegex = /^.{6,20}$/;

    const setPass = async (email, password) => {
      setIsLoading(true); 
      const data = await setNewPassword(email, password);
      try {
        if (data.result === "success") {
          setError(null);
          navigate("/signin");
        } else {
          setError((prev) => "Unexpected error");
        }
      } catch (error) {
        setError((prev) => error.message || "Server error");
      }
      finally {
        setIsLoading(false); // установить состояние isLoading в значение false
      }
    };

    if (password !== confirmPassword) {
      setConfirmPasswordError(" Password mismatch");
    } else {
      if (!passwordRegex.test(password)) {
        setPasswordError("Password must be between 6 and 20 characters");
        return;
      }
      setPasswordError("");
      setConfirmPasswordError("");

      if (email) {
        setPass(email, password);
      } else if (localStorage.getItem("email")) {
        setPass(localStorage.getItem("email"), password);
      } else {
        navigate("/signin");
      }
    }
  };
  return (
    <>
      <div className=" w-[100%] bg-skin-fill-inverted h-screen flex font-montserrat justify-center content-center items-center">
        <div className="w-[384px]  h-[500px] flex flex-col ">
          <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />

          <input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword((prev) => e.target.value);
            }}
            required
            maxLength="20"
            className={`bg-skin-fill-inverted text-[16px] placeholder:text-skin-muted
            ${passwordError ? ' border-skin-border-error text-skin-error' : 'border-skin-border-inverted text-skin-inverted' }  
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
              setConfirmPassword((prev) => e.target.value);
            }}
            maxLength="20"
            required
            className={`${confirmPasswordError ? '  border-skin-border-error text-skin-error' : 'border-skin-border-inverted text-skin-inverted'} 
            
            text-[16px] placeholder:text-skin-muted bg-skin-fill-inverted
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
    </>
  );
}
