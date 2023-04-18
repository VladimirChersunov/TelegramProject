import { StartPage } from "./Components/AuthComponents/StartPage";
import { MainPage } from "./Components/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { SignIn } from "./Components/AuthComponents/SignIn";
import { SignUp } from "./Components/AuthComponents/SignUp";
import { EnterCode } from "./Components/AuthComponents/EnterCode";
import { useState, useEffect } from "react";
import { EnterEmail } from "./Components/AuthComponents/EnterEmail";
import { SetNewPassword } from "./Components/AuthComponents/SetNewPassword";
import { SignUpFinish } from "./Components/AuthComponents/SignUpFinish";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [userData, setUserData] = useState({});
  const location = useLocation();
  const [token, setToken] = useState(location.state?.token || "");


  const toggleDarkMode = (props) => {
    setDarkMode((prevDarkMode) => props);
  };

  const signUpData = ({ username, email, password, code }) => {
    setUsername((prevUsername) => username);
    setPassword((prevPassword) => password);
    setEmail((prevEmail) => email);
    setCode((prevCode) => code.code);
  };

  const recoveryData = (props) => {
    setEmail((prevEmail) => props.email);
    setCode((prevCode) => props.code);
    setUsername((prevUsername) => "");
    setPassword((prevPassword) => "");
  };

  const mainUserData = (props) => {
    setUserData((prev) => props);
  };

  const setTokenCallback = (props) =>{
    setToken(props)
  }
 

  useEffect(() => {
    document.title = "Cryptic";
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
   
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else if (storedToken) {
      setToken(storedToken);
    }
  }, [token,location.state?.token]);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}  `}>
      <Routes>
        <Route
          path="/main"
          element={
            token ? (
              <MainPage
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                userData={userData}
              />
            ) : (
              <SignIn />
            )
          }
        ></Route>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/setnewpassword"
          element={<SetNewPassword email={email} />}
        />
        <Route path="/signin" element={<SignIn setTokenCallback={setTokenCallback}/>} />
        <Route
          path="/recovery"
          element={<EnterEmail recoveryData={recoveryData} />}
        />
        <Route
          path="/signup"
          element={
            <SignUp signUpData={signUpData} mainUserData={mainUserData} />
          }
        />
        <Route path="/successful" element={<SignUpFinish />} />
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
