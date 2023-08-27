const dateFormat = (date) => {
  let dateFormat2 =
    date.getFullYear() +
    "." +
    (date.getMonth() + 1 < 9
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    "." +
    (date.getDate() < 9 ? "0" + date.getDate() : date.getDate());
  return dateFormat2;
};

const dateFormatForButton = (date) => {
  let dateFormat2 =
    (date.getMonth() + 1 < 9
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    "월" +
    (date.getDate() < 9 ? "0" + date.getDate() : date.getDate()) +
    "일";
  return dateFormat2;
};

const getItemFromString = (time) => {
  let result = time.slice(-3).replace("시", ":00");
  return result;
};

const getMarkThousand = (number) => {
  let toNumberString = number
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  toNumberString = toNumberString + "원";
  return toNumberString;
};

const getRemoveMarkThousand = (numberString) => {
  let toNumber = numberString.replace(",", "");
  toNumber = toNumber.replace("원", "");
  return toNumber;
};

export default {
  dateFormat,
  getItemFromString,
  dateFormatForButton,
  getMarkThousand, // 천단위 자릿수 표시 + '원'추가
  getRemoveMarkThousand, // 천단위 및 '원' 제거 후 숫자만 반환
};
