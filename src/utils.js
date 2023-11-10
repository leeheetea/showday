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

const timeFormatForButton = (time) => {
  // ex) time 이 16:00:00 으로 넘오옴
  // 16:00로 문자열 만들어 넘기기
  let timeString = time.slice(0, -3);
  //console.log(">>> utils timeString ", time, timeString);
  return time;
};

const getItemFromString = (time) => {
  console.log("(getItemFromString) time : ", time);
  let result = time?.slice(-3).replace("시", ":00");
  return result;
};

const getMarkThousand = (number) => {
  console.log("(getMarkThousand) number : ", number);
  if (number !== null && number === undefined) {
    console.log(`">>> $(number)값을 확인해 주세요."`);
    return "0";
  }

  const checkingValue = "원";
  let toNumberString = number
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  toNumberString = !toNumberString.includes(checkingValue)
    ? toNumberString + "원"
    : toNumberString;
  return toNumberString;
};

const getRemoveMarkThousand = (numberString) => {
  // console.log(`>>> numberString : ${numberString}`);
  if (numberString === null || numberString === "") {
    console.log(">>> 변환 전 값이 null 또는 빈 문자열 입니다.");
    return 0;
  }
  let toNumber = numberString.replace(",", "");
  toNumber = toNumber.replace("원", "");
  return toNumber;
};

const getAboutDelimiter = (type, delimiter, str1, str2) => {
  if (type === "F") {
    // row + delimiter + col
    return str1.split(delimiter);
  } else if (type === "D") {
    // row + delimiter + col 이나 dispaly 용
    let rowChar = "A";
    rowChar = String.fromCharCode(65 + str1.split(delimiter)[0] - 1); // 'A' 아스키 코드 65
    return [rowChar, str1.split(delimiter)[1]];
  } else if (type === "S") {
    // 좌석 표시때 쓰이는 display용 알파벳 변환
    return String.fromCharCode(65 + str1 - 1); // 'A' 아스키 코드 65
  } else if (type === "B") {
    // get row, col
    return str1 + delimiter + str2;
  }
};

const checkTimeStringFor = (timeStr) => {
  const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;

  if (timePattern.test(timeStr)) {
    console.log("유효한 시간 형식입니다.", timeStr);
    return true;
  } else {
    console.log("유효하지 않은 시간 형식입니다.", timeStr);
    return false;
  }
};

export default {
  dateFormat,
  getItemFromString,
  dateFormatForButton,
  getMarkThousand, // 천단위 자릿수 표시 + '원'추가
  getRemoveMarkThousand, // 천단위 및 '원' 제거 후 숫자만 반환
  getAboutDelimiter,
  checkTimeStringFor,
  timeFormatForButton,
};
