import axios from "axios";

export const CMS_URL = "https://cms-circularforzero.herokuapp.com";

const CMS = axios.create({
  baseURL: `${CMS_URL}/api`,
});

export const API = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://api-circularforzero.herokuapp.com",
});

export default CMS;
