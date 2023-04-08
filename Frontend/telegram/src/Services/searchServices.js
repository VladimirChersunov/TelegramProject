import axiosCreate from "./axiosCreate";


//Chats/findchats
export const getSearchResult = async (data) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await axiosCreate.post(
        "Chats/findchats",
        { text: data },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response);
      throw new Error(error.response.data.message);
    }
  } else {
    console.log("missing token");
  }
};
