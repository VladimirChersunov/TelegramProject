import axiosCreate from "./axiosCreate";

//Users/login setLocaleStorage
export const login = async (login, password) => {
  try {
    const response = await axiosCreate.post("Users/login", { login, password });
    localStorage.setItem("token", response.data.jwtToken);
    localStorage.setItem("username", response.data.user.userName);
    localStorage.setItem("user", response.data.user);
    const jsonString = JSON.stringify(response.data.user);
    const blob = new Blob([jsonString]);

    const sizeInKB = (blob.size / 1024).toFixed(2);

    console.log(`${sizeInKB} KB`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//Users/register
export const register = async (username, email, password) => {
  try {
    const response = await axiosCreate.post("Users/register", {
      username,
      email,
      password,
    });
    localStorage.setItem("token", response.data.jwtToken);
    return response.data;
  } catch (error) {
    console.log("error");
    throw new Error(error.response.data.message);
  }
};

//mail/sendcode
export const emailCheck = async (email) => {
  try {
    const response = await axiosCreate.post("Email/sendcode", { email });
    return response.data;
  } catch (error) {
    console.log("error");
    throw new Error(error.response.data.message);
  }
};

//Email/unique
export const emailUnique = async (email, username) => {
  try {
    const response = await axiosCreate.post("Email/unique", {
      email,
      username,
    });

    return response.data;
  } catch (error) {
    console.log("error");
    throw new Error(error.response.data.message);
  }
};

//Email/unique ???
export const setNewPassword = async (email, newPassword) => {
  try {
    const response = await axiosCreate.patch("Email/unique", {
      email,
      newPassword,
    });

    return response.data;
  } catch (error) {
    console.log("error");
    throw new Error(error.response.data.message);
  }
};

//Users/me ????
export const getAuthenticatedUser = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axiosCreate.get("Users/me", {
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

//Email/validatetoken
export const tokenCheck = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosCreate.post("Email/validatetoken", { token });
    return response.data;
  } catch (error) {
    console.log("error");
    throw new Error(error.response.data.message);
  }
};
