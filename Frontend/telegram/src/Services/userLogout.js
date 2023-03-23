import axiosCreate from "./axiosCreate";

export const userLogout = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const userIsInactive = await axiosCreate.post("Email/validatetoken", {
        token,
      });

      if (!userIsInactive.data.valid) {
        localStorage.removeItem("token"); // Очищаем токен из local storage
        return true;
      }
    } catch (error) {
      console.log(error.data);
      localStorage.removeItem("token"); // Очищаем токен из local storage
      return true;
    }
  } else {
    console.log("token missing");
    return true;
  }
};
