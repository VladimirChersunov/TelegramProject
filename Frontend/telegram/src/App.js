import { StartPage } from "./Components/AuthComponents/StartPage";
import { MainPage } from "./Components/MainPage";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./Components/AuthComponents/SignIn";
import { SignUp } from "./Components/AuthComponents/SignUp";
import { EnterCode } from "./Components/AuthComponents/EnterCode";
import { useState } from "react";
import { EnterEmail } from "./Components/AuthComponents/EnterEmail";
import { SetNewPassword } from "./Components/AuthComponents/SetNewPassword";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const signUpData = ({ username, email, password, code }) => {
    setUsername((prevUsername)=>username);
    setPassword((prevPassword)=>password);
    setEmail((prevEmail)=>email);
    console.log(code)
    setCode((prevCode)=>code.code);
  };

  const recoveryData = (props) => {
    setEmail((prevEmail)=>props.email);
    console.log(props.code)
    setCode((prevCode)=>props.code);
    setUsername((prevUsername)=>"");
    setPassword((prevPassword)=>"");
  };

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}  `}>
      <Routes>
        <Route
          path="/main"
          element={
            <MainPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        ></Route>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/setnewpassword"
          element={<SetNewPassword email={email} />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/recovery"
          element={<EnterEmail recoveryData={recoveryData} />}
        />
        <Route path="/signup" element={<SignUp signUpData={signUpData} />} />
        <Route
          path="/entercode"
          element={
            <EnterCode
              email={email}
              password={password}
              username={username}
              code={code}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
