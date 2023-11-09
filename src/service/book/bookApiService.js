import { call } from "../../page/ApiService";

// 해당조건의 해당 좌석 예매 가능 여부 조회
export function callReadShowSeat(showId, showDateTime) {
  console.log(">>> parameter showId : ", showId, showDateTime);

  return call(
    "/show/seat/" +
      showId +
      "?date=" +
      showDateTime.date +
      "&time=" +
      showDateTime.time,
    "GET"
  ).then((response) => {
    //console.log(">>> [readShowSeat] response : ", response);
    return response;
  });
}

export function callReadShow(showId) {
  return call("/show/" + showId).then((response) => {
    console.log(response);
    return response;
  });
}

export function callReadVenueSeatSize(vnenuId) {
  return call("/venue/" + vnenuId).then((response) => {
    console.log("readVenueSeatSize call : ", response);
    return response;
  });
}
