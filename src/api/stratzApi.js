const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const stratzApi = axios.create({
  baseURL: process.env.STRATZ_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRATZ_API_KEY}`,
  },
});

module.exports = stratzApi;
