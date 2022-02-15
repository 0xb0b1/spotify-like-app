import axios from "axios";

const api = axios.create({
  headers: {
    Authorization: `Basic ${process.env.BASE64_ENCODED_ID}`,
  },
});

export default api;
