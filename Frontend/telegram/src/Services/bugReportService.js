import axiosCreate from "./axiosCreate";
import { authHeader } from "./tokenServices";

export const bugReport = async (userName, bugTitle, bugDescription) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosCreate.post(
      "BugReports",
      { userName, bugTitle, bugDescription },
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
