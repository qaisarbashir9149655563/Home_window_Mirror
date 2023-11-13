import axios from "axios";
const API_URL = "https://home-window-mirro.onrender.com/api/";
export const sendMail = async (formData: any) => {
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
    const res = await axios.post(`${API_URL}/api/sendMail`, payload);
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
};
