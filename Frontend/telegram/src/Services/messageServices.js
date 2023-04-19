import axiosCreate from "./axiosCreate";


//Messages/sendmessage
export const createMessaage = async (userId, chatId, data, text) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await axiosCreate.post(
        `Messages/sendmessage`,
        { userId, chatId, data, text },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  } else {
    console.log("missing token");
  }
};


//Chats/openpublicchat актуализация меседжей
export const getOpenPublicChat = async (chatName, authorId) => {
  

  const token = localStorage.getItem("token");
 

  if (token) {
    try {
      const response = await axiosCreate.post(
        `Chats/openpublicchat`,
        { chatName, authorId},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  } else {
    console.log("missing token");
  }
};

//Chats/openprivatechat актуализация меседжей
export const getOpenPrivateChat = async (opponentId) => {
  
 
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const currentUserId = currentUser?.id 
  if (token) {
    try {
      const response = await axiosCreate.post(
        `Chats/openprivatechat`,
        { currentUserId, opponentId },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  } else {
    console.log("missing token");
  }
};


//Messages/${id}
export const getMessaagesById = async (id) => {
  const token = localStorage.getItem("token");
  if (token && id>0) {
    try {
      const response = await axiosCreate.get(`Messages/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  } else {
    console.log("missing token");
  }
};

//Messages/deletemessage
export const deleteMessage = async (messageId, userId) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await axiosCreate.delete(
        `Messages/deletemessage`,

        {
          headers: {
            Authorization: "Bearer " + token,
          },
          data: {
            messageId,
            userId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  } else {
    console.log("missing token");
  }
};


//Chats/setpinnedmessage  добавление и удаление pinned
export const pinnedMessaages = async (action, messageId, chatId) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await axiosCreate.patch(
        `Chats/setpinnedmessage`,
        { action, messageId, chatId },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  } else {
    console.log("missing token");
  }
};


//Messages/readmessages
export const readMessaages = async (chatId,userId) => {
  const token = localStorage.getItem("token");

  if (token && chatId) {
    try {
      const response = await axiosCreate.post(
        `Messages/readmessages`,
        {  chatId,userId },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response;
    }
  } else {
    console.log("missing token");
  }
};

