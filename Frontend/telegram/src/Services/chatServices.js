import axiosCreate from "./axiosCreate";

export const createPrivate = async (opponentName) => {
  try {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("username");
    console.log("create pm");
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

export const leavePublic = async (chatName) => {
  try {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("username");
    const response = await axiosCreate.post(
      "Chats/leavepublicchat",
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

export const getChatById = async (chatId) => {
  try {
    const token = localStorage.getItem("token");
    if (token && chatId) {
      const response = await axiosCreate.get(`Chats/${chatId}`,
     
       {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteChatById = async (chatId) => {
  try {
    const token = localStorage.getItem("token");
    if (token && chatId) {
      const response = await axiosCreate.delete(`Chats/${chatId}`,
     
       {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createChat = async (chatImage,chatName,shortMessage,publishTime,type,chatInfo,authorId) => {
  try {
    const token = localStorage.getItem("token");
   
    const response = await axiosCreate.post(
      "Chats/createchat",
      { chatImage,chatName,shortMessage,publishTime,type,chatInfo,authorId},
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


