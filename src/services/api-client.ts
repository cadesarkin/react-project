import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '97d52b8a8b56451ea9e2b7f57247fa1b',
  },
});