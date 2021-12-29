import axios from "axios";

export const CMS_URL = "https://cms-circularforzero.herokuapp.com";

const CMS = axios.create({
  baseURL: `${CMS_URL}/api`,
});

export default CMS;
