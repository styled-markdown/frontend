import { format, formatDistance } from "date-fns";
import { ko } from "date-fns/locale";

export const convertDate = (date) => {
  const result = format(new Date(date), "yyyy.MM.dd");
  return result;
};

export const convertUpdatedDate = (date) => {
  const result = formatDistance(new Date(date), Date.now(), {
    includesSeconds: true,
    addSuffix: true,
    locale: ko,
  });

  return result;
};
