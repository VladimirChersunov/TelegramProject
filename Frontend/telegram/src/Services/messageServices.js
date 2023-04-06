import axiosCreate from "./axiosCreate";

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

export const getAllMessaages = async (chatName, authorId, privateChat) => {
  //console.log(chatName)
  let additionalChatName = null;
  const token = localStorage.getItem("token");
  if (privateChat === "Private") {
    additionalChatName = localStorage.getItem("username");
  } else {
    additionalChatName = null;
  }

  if (token) {
    try {
      const response = await axiosCreate.post(
        `Chats/openchat`,
        { chatName, authorId, additionalChatName },
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

export const getMessaagesById = async (pinned) => {
  const token = localStorage.getItem("token");
//console.log(pinned)
  if (token) {
    try {
      const response = await axiosCreate.get(`Messages/${pinned}`, {
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

export const readMessaages = async (chatId) => {
  const token = localStorage.getItem("token");

  if (token && chatId) {
    try {
      const response = await axiosCreate.post(
        `Messages/readmessages/${chatId}`,
        {  chatId },
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

