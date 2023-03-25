import axiosCreate from "./axiosCreate";

export const getContacts = async () => {
  const token = localStorage.getItem("token");
  const currentUser = localStorage.getItem("username");

  if (token) {
    try {
      const response = await axiosCreate.get(
        `UserContacts/user/${currentUser}`,
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

export const deleteContacts = async (contactUserName) => {
    const token = localStorage.getItem("token");
    const currentUserLogin = localStorage.getItem("username");
    if (token) {
      try {
        const response = await axiosCreate.delete(
          "UserContacts/deletecontact",
         
          {
            headers: {
              Authorization: "Bearer " + token,
            },
            data:{ currentUserLogin, contactUserName },
          },
         
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
  

export const addContact = async (contactUserName) => {
  const token = localStorage.getItem("token");
  const currentUserLogin = localStorage.getItem("username");
  if (token) {
    try {
      const response = await axiosCreate.post(
        "UserContacts/createcontact",
        { currentUserLogin, contactUserName },
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
