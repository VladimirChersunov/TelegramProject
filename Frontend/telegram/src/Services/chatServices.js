import axiosCreate from "./axiosCreate";

//Chats/enterprivatechat
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

//Chats/enterpublicchat
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

//Chats/leavepublicchat
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

//get Chats/${chatId}
export const getChatById = async (chatId) => {
  try {
    const token = localStorage.getItem("token");
    if (token && chatId) {
      const response = await axiosCreate.get(
        `Chats/${chatId}`,

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

//delete Chats/${chatId}
export const deleteChatById = async (chatId) => {
  try {
    const token = localStorage.getItem("token");
    if (token && chatId) {
      const response = await axiosCreate.delete(
        `Chats/${chatId}`,

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

//Chats/createchat
export const createChat = async (
  chatImage,
  chatName,
  type,
  chatInfo,
  authorId,
  members
) => {
  const token = localStorage.getItem("token");
  if (token && chatName) {
    try {
      const response = await axiosCreate.post(
        "Chats/createchat",
        { chatImage, chatName, type, chatInfo, authorId, members },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(error.response.data.message);
    }
  }
};

//Chats/enterprivatechat
export const chatExist = async (opponentId) => {
  try {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user?.id;
    if (id && opponentId) {
      const response = await axiosCreate.post(
        "Chats/chatexists",
        { id, opponentId },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};

//Chats/notifications/${chatId}
export const chatNotifications = async (chatId) => {
  try {
    const token = localStorage.getItem("token");
    if (token && chatId) {
      const response = await axiosCreate.patch(
        `Chats/notifications/${chatId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

//Chats/isuserinchat
export const isUserInChat = async (chatId) => {
  try {
    const token = localStorage.getItem("token");
    const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser?.id 
    const response = await axiosCreate.post(
      "Chats/isuserinchat",
      { userId, chatId },
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