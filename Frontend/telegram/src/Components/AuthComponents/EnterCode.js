import { useNavigate } from "react-router-dom";
import logo from "./../../Assets/Logo.svg";
import { useEffect, useState } from "react";
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
  const [error, setError] = useState(null);

  useEffect(() => {
    setUsername(props.username);
    setPassword(props.password);
    setEmail(props.email);
  }, [props]);

  useEffect(() => {
    setCode((prevCode) => one + two + three + four + five);
  }, []);

  const handleRegister = async () => {
    console.log(props);
    console.log(props.code);
    console.log(code);
    if (props.code === code) {
      console.log("+");
      console.log(username);
      if (username.length > 4) {
        try {
          const data = await register(username, email, password);
          setError(null);
          console.log(data.user.id);
          if (data.user.id) {
            navigate("/main");
          }
        } catch (error) {
          setError(error.message);
        }
      } else {
        navigate("/setnewpassword");
      }
    }
  };

  return (
    <div className="bg-[#0C0221] w-[100%] h-screen flex justify-center font-montserrat content-center items-center">
      <div className="w-[384px]  h-[331px] flex flex-col text-center">
        <img src={logo} className="h-[43px] mb-[35px]" alt="logo" />
        <label className="text-[18px] text-skin-inverted text-center font-medium leading-[27px] tracking-normal">
          A verification code has been sent to your mailbox
        </label>

        <div className="flex flex-row mt-5 justify-around ">
          <input
            maxLength="1"
            onChange={(e) => {
              setOne(e.target.value);
            }}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
             caret-transparent border-b-[1px] pb-[10px]
            placeholder:text-skin-muted border-skin-border-inverted
             outline-none "
            placeholder=""
          />
          <input
            maxLength="1"
            onChange={(e) => {
              setTwo(e.target.value);
            }}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
          <input
            maxLength="1"
            onChange={(e) => {
              setThree(e.target.value);
            }}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
          <input
            maxLength="1"
            onChange={(e) => {
              setFour(e.target.value);
            }}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
          <input
            maxLength="1"
            onChange={(e) => {
              setFive(e.target.value);
            }}
            className="w-10 text-center text-5xl bg-skin-fill-inverted text-skin-inverted 
            caret-transparent border-b-[1px] pb-[10px]
           placeholder:text-skin-muted border-skin-border-inverted
            outline-none "
            placeholder=""
          />
        </div>

        <button
          onClick={handleRegister}
          className="rounded-3xl hover:bg-skin-button-inverted-hover text-skin-base text-[17px] font-medium
          w-[250px] h-[50px] leading-[26px] bg-skin-fill mx-auto mt-14 tracking-normal"
        >
          Next
        </button>
      </div>
    </div>
  );
}
