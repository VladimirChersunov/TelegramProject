import React, { useState } from "react";
import { register } from "../../Actions/authServiceG";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
    } else {
      // Проверяем правильность введенного email
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        setEmailValid(false);
        return;
      } else {
        setEmailValid(true);
      }
      // Проверяем правильность введенного имени пользователя
      const usernameRegex = /^[a-zA-Z0-9]{6,20}$/;
      if (!usernameRegex.test(username)) {
        setUsernameValid(false);
        return;
      } else {
        setUsernameValid(true);
      }
      // Проверяем правильность введенного пароля
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
      if (!passwordRegex.test(password)) {
        setPasswordValid(false);
        return;
      } else {
        setPasswordValid(true);
      }
      // Проверяем правильность повторного введенного пароля
    if (password !== confirmPassword) {
        setIsConfirmPasswordValid(false);
        return;
      } else {
        setIsConfirmPasswordValid(true);
      }
      try {
        // Отправляем данные на сервер
        const response = await authService.register(username, email, password);
        setIsRegistrationSuccess(true);
        console.log("Данные отправлены: ", response.data);
      } catch (error) {
        setRegistrationErrorMessage(error.response.data.message);
        console.log("Ошибка регистрации: ", error);
      }
    };
      console.log("Данные отправлены: ", username, email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Имя пользователя:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              color: usernameValid ? "black" : "red",
              border: usernameValid ? "1px solid black" : "1px solid red",
            }}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              color: emailValid ? "black" : "red",
              border: emailValid ? "1px solid black" : "1px solid red",
            }}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              color: passwordValid ? "black" : "red",
              border: passwordValid ? "1px solid black" : "1px solid red",
            }}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Подтвержение пароля:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              color: confirmPasswordValid ? "black" : "red",
              border: confirmPasswordValid
                ? "1px solid black"
                : "1px solid red",
            }}
            required
          />
        </label>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );


export default RegistrationForm;
