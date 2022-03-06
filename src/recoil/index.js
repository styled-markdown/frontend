import { atom } from "recoil";
import { markdownExample } from "../constants";

export const markdownState = atom({
  key: "markdownState",
  default: markdownExample,
});
