import axios from "axios";

const API_URL = "https://home-window-mirro.onrender.com/api/";
const API_URL_LOCAL = "http://localhost:10000/api/";
interface IRegisterUser {
  email: string;
  password: string;
}
export const registerUser = async (payload: IRegisterUser) => {
  try {
    const response = await axios.post(`${API_URL_LOCAL}/register`, payload);
    if (response?.data) {
      return response?.data;
    }
  } catch (error) {
    console.log(error, "while fetching user detail");
  }
};
export const loginUser = async (payload: any) => {
  try {
    const response = await axios.post(`${API_URL_LOCAL}/login`, payload);
    if (response?.data) {
      return response?.data;
    }
  } catch (error) {
    console.log(error, "while fetching user detail");
  }
};
