import { call } from "../../page/ApiService";

// 해당조건의 해당 좌석 예매 가능 여부 조회
export async function callReadShowSeat(showId, showDateTime) {
  console.log(">>> parameter showId : ", showId, showDateTime);

  const response = await call(
    "/show/seat/" +
      showId +
      "?date=" +
      showDateTime.date +
      "&time=" +
      showDateTime.time,
    "GET"
  );
  return response;
}

export async function callReadShow(showId) {
  const response = await call("/show/" + showId);
  console.log(response);
  return response;
}

export async function callReadVenueSeatSize(vnenuId) {
  const response = await call("/venue/" + vnenuId);
  console.log("readVenueSeatSize call : ", response);
  return response;
}
