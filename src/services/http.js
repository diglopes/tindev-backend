const axios = require("axios");

const http = axios.create({
  baseURL: "https://api.github.com/users"
});

module.exports = http;
