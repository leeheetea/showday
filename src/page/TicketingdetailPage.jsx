import React, { useState } from "react";
import MyPage from "../pages/MyPage";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TicketingdetailPage = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h5>test</h5>
      <Calendar
        //className={"calendarCustom"}
        local="ko"
        onChange={setValue}
        //minDate={moment.formatDay}
        value={value}
      //formatDay={(locale, date) => moment(date).format("DD")}
      />
    </div>
  );
}

export default TicketingdetailPage;