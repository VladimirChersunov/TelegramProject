import axiosCreate from "./axiosCreate";

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

export const editProfile = async (id, age, email,  userName, about) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosCreate.patch(
      "Users/patchuser",
      { id,userName, email, about, age},
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

export const getUserByUsername = async (username) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosCreate.get(
      `Users/username/${username}`,     
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

export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosCreate.get(
      `Users/${id}`,     
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

