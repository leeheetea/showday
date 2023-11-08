import {call} from "../../page/ApiService";

export function readShowSeat(showId, showDateTime) {

  console.log(">>> parameter showId : " + showId);
    console.log(">>> parameter showDateTime : " + showDateTime.date, showDateTime.time);

  return call("/show/seat/" + showId
     + "?date=" + showDateTime.date
     + "&time=" + showDateTime.time, "GET")
    .then((response) => {
      console.log(">>> [readShowSeat] response : " + response);
      return response;
    })
}

export function readShow(showId) {
    return call("/show/" + showId).then((response) => {
        console.log(response);
        return response;
    })
}

export function readVenueSeatSize(vnenuId) {
    return call("/venue/" + vnenuId).then((response) => {
        console.log("readVenueSeatSize call : " , response);
        return response;
    })
}