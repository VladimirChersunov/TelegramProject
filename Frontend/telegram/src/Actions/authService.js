import axios from "axios";

const authService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const login = async (login, password) => {
  try {
    const response = await authService.post("Users/login", { login, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await authService.post("Users/register", {
      username,
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const emailCheck = async (email) => {
  try {
    const response = await authService.post("Email/sendcode", { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const emailUnique = async (email, username) => {
  try {
    const response = await authService.post("Email/unique", {
      email,
      username,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const setNewPassword = async (email, newPassword) => {
  try {
    
    const response = await authService.patch("Users/setpassword", { email, newPassword })
     
   
    return response.data;
  } catch (error) {
    console.log("error");
    throw new Error(error.response.data.message);
  }
};

export const getAuthenticatedUser = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await authService.get("Users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error");
    throw new Error(error.response.data.message);
  }
};


