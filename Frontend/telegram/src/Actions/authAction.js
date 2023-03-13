import axios from "axios";



const API_URL = "http://localhost:8081/api/auth/";



export const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password
  });
};

export const registerAdmin = (username, email, password, role) => {
 
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    role
  });
};

export const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
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