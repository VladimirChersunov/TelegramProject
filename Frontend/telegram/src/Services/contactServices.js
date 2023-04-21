import axiosCreate from "./axiosCreate";

//UserContacts/user/${currentUser}
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


//UserContacts/deletecontact
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
  
  
//UserContacts/createcontact
export const addContact = async (contactUserName) => {
  const token = localStorage.getItem("token");
  const currentUserLogin = localStorage.getItem("username");
  console.log(currentUserLogin)
  console.log(contactUserName)
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


//UserContacts/iscontact проверка юзера, в контактах ли он
export const isContact = async (contactId) => {
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser?.id 
  if (token && userId) {
    try {
      const response = await axiosCreate.post(
        "UserContacts/iscontact",
        { userId, contactId },
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
