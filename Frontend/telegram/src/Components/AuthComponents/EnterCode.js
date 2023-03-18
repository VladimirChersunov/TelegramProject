import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useEffect, useState, useRef, useCallback } from "react";
import { emailCheck, register } from "../../Actions/authService";

export function EnterCode(props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [code, setCode] = useState("");
  const [inCode, setInCode] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const [error, setError] = useState(null);
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);
  const fifthInputRef = useRef(null);


  

  useEffect(() => {
    if (props.username) {
      setUsername((prev) => props.username);
      localStorage.setItem("username", props.username);
    } else {
      setUsername((prev) => localStorage.getItem("username"));
    }
    if (props.password) {
      setPassword((prev) => props.password);
      localStorage.setItem("password", props.password);
    } else {
      setPassword((prev) => localStorage.getItem("password"));
    }
    if (props.code) {
      setInCode((prev) => props.code);
      localStorage.setItem("code", props.code);
    } else {
      setInCode((prev) => localStorage.getItem("code"));
    }
    if (props.email) {
      setEmail((prev) => props.email);
      localStorage.setItem("email", props.email);
    } else {
      setEmail((prev) => localStorage.getItem("email"));
    }
  }, []);

  const decrementTime = useCallback(() => {
    setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setButtonDisabled((prev) => false);
      return;
    }
    const intervalId = setInterval(decrementTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [decrementTime, timeLeft]);

  const handleInput = (event, nextInputRef) => {
    const input = event.target;
    if (input.value.length >= input.maxLength) {
      if (nextInputRef && nextInputRef.current) {
        nextInputRef.current.focus();
      }
    }
  };

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    setCode((prevCode) => one + two + three + four + five);
  }, [five]);

  const handlerResend = async () => {
    setError((prev) => null);
    setButtonDisabled((prev) => true);
    setTimeLeft((prev) => 10);
    console.log(email);
    const data = await emailCheck(email);    
    setInCode((prev) => data.code);
    localStorage.setItem("code", data.code);
    console.log(data.code)
    
  };

  const handleRegister = async () => {
    if (code) {
      console.log(inCode)
      console.log(code)
      if (inCode === code) {
        
        if(username){
          if (username.length > 4) {
            try {
              const data = await register(username, email, password);
              setError((prev) => null);
              console.log(data.user.id);
              if (data.user.id) {
                localStorage.removeItem('email');
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                localStorage.removeItem('code');
                navigate("/main");
              }
            } catch (error) {
              setError((prev) => error.message);
            }
          
        }
      } else {
        setError((prev) => null);         
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('code');
        navigate("/setnewpassword");
      }
       
      } else {
        setError("Code does not match, please try again");
      }
    } else {
      setError("Code does not match, please try again");
    }
  };

  const buttonText = buttonDisabled ? `Wait (${timeLeft})` : "Resend";

  return (
    <div className="w-[100%] bg-skin-fill-inverted h-screen flex justify-center font-montserrat content-center items-center">
      <div className="w-[384px]  h-[500px] flex flex-col text-center">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
        <label className="text-[18px] text-skin-inverted text-center font-medium leading-[27px] tracking-normal">
          A verification code has been sent to your mailbox
        </label>

        <div className="flex flex-row mt-5 justify-around ">
          <input
            ref={firstInputRef}
            maxLength="1"
            onChange={(e) => {
              setOne((prevValue) => e.target.value);
            }}
            required
            onInput={(event) => handleInput(event, secondInputRef)}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
             caret-transparent border-b-[1px] pb-[10px]
            placeholder:text-skin-muted border-skin-border-inverted
             outline-none "
            placeholder=""
          />
          <input
            ref={secondInputRef}
            maxLength="1"
            required
            onChange={(e) => {
              setTwo((prevValue) => e.target.value);
            }}
            onInput={(event) => handleInput(event, thirdInputRef)}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
          <input
            ref={thirdInputRef}
            maxLength="1"
            required
            onChange={(e) => {
              setThree((prevValue) => e.target.value);
            }}
            onInput={(event) => handleInput(event, fourthInputRef)}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
          <input
            ref={fourthInputRef}
            maxLength="1"
            required
            onChange={(e) => {
              setFour((prevValue) => e.target.value);
            }}
            onInput={(event) => handleInput(event, fifthInputRef)}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
          <input
            ref={fifthInputRef}
            maxLength="1"
            required
            onChange={(e) => {
              setFive((prevValue) => e.target.value);
            }}
            onInput={(event) => handleInput(event, null)}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
        </div>

        {error && (
          <p className=" text-skin-error mt-4 text-center text-xs">{error}</p>
        )}

        <button
          onClick={handleRegister}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          Next
        </button>

        <button
          name="resend"
          type="submit"
          onClick={handlerResend}
          disabled={buttonDisabled}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-inverted text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill-inverted mx-auto mt-14 tracking-normal border border-skin-border-inverted"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
