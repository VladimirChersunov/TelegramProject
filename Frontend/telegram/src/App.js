import { StartPage } from "./Components/AuthComponents/StartPage";
import { MainPage } from "./Components/MainPage";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./Components/AuthComponents/SignIn";
import { SignUp } from "./Components/AuthComponents/SignUp";
import { EnterCode } from "./Components/AuthComponents/EnterCode";
import { useState } from "react";




function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const signUpData = ({username, email, password, code}) =>{
   
    setUsername(username)
    setPassword(password)
    setEmail(email)
    setCode(code)
  }

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}  `}>
      <Routes>
        <Route
          path="/main"
          element={
            <MainPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        >
          
        </Route>
        <Route path="/" element={<StartPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp signUpData={signUpData}/>} />
        <Route path="/entercode" element={<EnterCode email={email} password={password} username={username} code={code}/>} />
      </Routes>
    </div>
  );
}

export default App;
