import axiosCreate from "./axiosCreate";

export const updateInfo = async () => {
  const login = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  if(login && token){
    try {
      const response = await axiosCreate.post("Users/updateinfo", {
        token,
        login,
      });
      return response.data;
    } catch (error) {
      console.log("error");
      throw new Error(error.response.data.message);
    }
  }
  else{
    console.log("missing data")
  }

};
