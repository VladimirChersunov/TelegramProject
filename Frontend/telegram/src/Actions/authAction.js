import axios from "axios";







export const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password
  });
};

export const registerAdmin = (username, email, password, role) => {
 
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
    role
  });
};

export const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        //localStorage.setItem("user", JSON.stringify(response.data));
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

export const logout = () => {
  TokenService.removeUser();
  //localStorage.removeItem("user");
};


export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

export const authService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default authService;