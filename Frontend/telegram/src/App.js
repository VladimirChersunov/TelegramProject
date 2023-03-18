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
  const [userData, setUserData] = useState({});
  const[token, setToken] = useState(localStorage.getItem('token'))

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
    setCode((prevCode)=>props.code);
    setUsername((prevUsername)=>"");
    setPassword((prevPassword)=>"");
  };

  const mainUserData = (props) => {
    setUserData((prev)=>props)
  };

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}  `}>
      <Routes>
        <Route
          path="/main"
          element={token ?
            <MainPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} userData={userData}/>
            : <SignIn />
          }
        ></Route>
        <Route path="/" element={ <StartPage /> } />
        <Route
          path="/setnewpassword"
          element={<SetNewPassword email={email} />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/recovery"
          element={<EnterEmail recoveryData={recoveryData} />}
        />
        <Route path="/signup" element={<SignUp signUpData={signUpData} mainUserData={mainUserData}/>} />
        <Route
          path="/entercode"
          element={
            <EnterCode
              email={email}
              password={password}
              username={username}
              code={code}
              mainUserData={mainUserData}
            />
          }
        />
       
      </Routes>
    </div>
  );
}

export default App;
