import React, { useState } from "react";
import axios from "axios";

function EmailVerification() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);

  const sendCode = () => {
    axios
      .post("http://localhost:5000/api/sendcode", { email })
      .then((response) => {
        setIsEmailSent(true);
      });      
  };

  const verifyCode = () => {
    axios
      .post("http://localhost:5000/api/verifycode", { email, code })
      .then((response) => {
        setIsCodeCorrect(true);
      })
      .catch((error) => {
        setIsCodeCorrect(false);
      });
  };

  return (
    <div>
      <h2>Enter your email:</h2>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isEmailSent && (
        <button onClick={sendCode}>Send verification code</button>
      )}
      {isEmailSent && (
        <div>
          <h2>Введите код подтверждения:</h2>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={verifyCode}>Подтвердить</button>
        </div>
      )}
      {isCodeCorrect && <p>Код подтверждения верный!</p>}
      {!isCodeCorrect && isEmailSent && <p>Код подтверждения неверный!</p>}
    </div>
  );
}

export default EmailVerification;
