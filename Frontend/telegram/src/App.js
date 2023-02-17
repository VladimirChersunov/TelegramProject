import { AuthPage } from "./Components/AuthComponents/AuthPage";
import { MainPage } from "./Components/MainPage";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./Components/AuthComponents/SignIn";
import { SignUp } from "./Components/AuthComponents/SignUp";
import { EnterCode } from "./Components/AuthComponents/EnterCode";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = ()=> {
    setDarkMode(prevDarkMode => !prevDarkMode)
    console.log(darkMode)
}

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}  `}>
      <Routes>
        <Route path="/main" element={<MainPage darkMode={darkMode}  toggleDarkMode={toggleDarkMode} />} />
        <Route path="/" element={<AuthPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/entercode" element={<EnterCode />} />
      </Routes>
    </div>
  );
}

export default App;
