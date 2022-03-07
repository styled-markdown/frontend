import { atom } from "recoil";
import { markdownExample } from "../constants";

export const markdownState = atom({
  key: "markdownState",
  default: markdownExample,
});

export const loginState = atom({
  key: "loginState",
  default: false,
});
