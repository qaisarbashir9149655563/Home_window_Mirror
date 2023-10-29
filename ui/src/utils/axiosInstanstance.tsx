import axios from "axios";
//later i will use it
export const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Authorization: "Bearer YOUR_ACCESS_TOKEN", // Example authorization header
