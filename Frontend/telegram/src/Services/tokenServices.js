const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.accessToken;
};

const updateLocalAccessToken = (token) => {
  let user = JSON.parse(localStorage.getItem("user"));
  user.accessToken = token;
  localStorage.setItem("user", JSON.stringify(user));
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const setUser = (user) => {
  console.log(JSON.stringify(user));
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem("user");
};

export function authHeader() {
  const token = localStorage.getItem("token"); // Получение JWT токена из localStorage
  const username = localStorage.getItem("username");

  if (username && token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}

const TokenService = {
  getLocalAccessToken,
  updateLocalAccessToken,
  getCurrentUser,
  setUser,
  removeUser,
};

export default TokenService;
