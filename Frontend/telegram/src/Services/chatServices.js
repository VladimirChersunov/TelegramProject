import axiosCreate from "./axiosCreate";

export const createPrivate = async (opponentName) => {
    try {
      const token = localStorage.getItem("token");
      const userName = localStorage.getItem("username");
      console.log("create pm")
      const response = await axiosCreate.post(
        "Chats/enterprivatechat",
        { userName, opponentName },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  };

  export const enterPublic = async (chatName) => {
    try {
      const token = localStorage.getItem("token");
      const userName = localStorage.getItem("username");
      const response = await axiosCreate.post(
        "Chats/enterpublicchat",
        { userName, chatName },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  };
  