import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.withCredentials = true;

export const loginApi = async ({ email, displayName }) => {
  const res = await axios.post("/api/auth/login", { email });
  return res;
};

export const joinApi = async (userInfos) => {
  const res = await axios.post("/api/users", userInfos);
  return res;
};
