import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-picker">
      <p className="color-light p-3 fs-2">Pick a date</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default DatePickerComp;
