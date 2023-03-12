import axios from "axios";

const api = axios.create({
  baseURL: 'https://jeagor-resto-back.vercel.app/',
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
