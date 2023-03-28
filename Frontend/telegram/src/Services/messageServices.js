import axiosCreate from "./axiosCreate";

export const createMessaage = async (userId,chatId,data,text ) => {
  const token = localStorage.getItem("token");
 
  if (token) {
    try {
      const response = await axiosCreate.post(
        `Messages/sendmessage`,
        { userId,chatId,data,text },
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

export const getAllMessaages = async (chatId) => {
    const token = localStorage.getItem("token");
   
    if (token) {
      try {
        const response = await axiosCreate.get(
          `Messages/chat/${chatId}`,         
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