import axios from "axios";

const API_URL = "https://home-window-mirro.onrender.com/api/";
// const API_URL = "http://localhost:10000/api/";

export const getUserDetail = async () => {
  try {
    const response = await axios.get(`${API_URL}user/getall`);
    if (response?.data) {
      return response?.data;
    }
  } catch (error) {
    console.log(error, "while fetching user detail");
  }
};

export const createUserDetail = async (formData: any) => {
  const payload = {
    body: formData,
    baseURL: API_URL,
    timeout: 5000,
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(`${API_URL}user/create`, payload);
    if (response?.data) {
      return response?.data;
    }
  } catch (error) {
    console.log(error, "while fetching user detail");
  }
};
export const deleteUserDetail = async (id: any) => {
  try {
    const response = await axios.delete(`${API_URL}user/delete/${id}`);
    if (response?.data) {
      return response?.data;
    }
  } catch (error) {
    console.log(error, "while fetching deleting detail");
  }
};
