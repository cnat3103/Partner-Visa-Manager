import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks() {
    return axios.get(`https://newsapi.org/v2/everything?q=Australian+visa&apiKey=74cb8f0c2d334d798e0f255c2c074b72`);
  }
};