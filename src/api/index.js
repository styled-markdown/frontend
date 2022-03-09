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

export const getDocsApi = async () => {
  const res = await axios.get("/api/users/docs");
  return res;
};

export const createDocApi = async (title) => {
  const res = await axios.post("/api/docs", { title });
  return res;
};

export const getDocDetailApi = async (id) => {
  const res = await axios.get(`/api/docs/${id}`);
  return res;
};

export const saveDocApi = async ({ id, body }) => {
  const res = await axios.put(`/api/docs/${id}`, { body });
  return res;
};
