import axiosCreate from "./axiosCreate";

//Users/updateinfo апдейт всего, кроме меседжей
export const updateInfo = async () => {
  const login = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  if (login && token) {
    try {
      const response = await axiosCreate.post("Users/updateinfo", {
        token,
        login,
      });
      return response.data;
    } catch (error) {
      console.log(error.response);
      throw new Error(error.response.data.message);
    }
  } else {
    console.log("missing data");
  }
};

//Users/patchuser редактируем профиль
export const editProfile = async (id, userName, email, about, age, photo) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosCreate.patch(
      "Users/patchuser",
      { id, userName, email, about, age, photo },
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
};

//Users/username/${username}
export const getUserByUsername = async (username) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosCreate.get(`Users/username/${username}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};

//get Users/${id}
export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (token && id > 0) {
      const response = await axiosCreate.get(`Users/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response.data;
    }

   
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};
