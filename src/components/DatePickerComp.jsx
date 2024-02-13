import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
const DatePickerComp = () => {
  const [startDate, setStartDate] = useState(new Date());

  const renderDayContents = (day, date) => {
    const isDaySelected =
      startDate.getDate() === date.getDate() &&
      startDate.getMonth() === date.getMonth();
    return (
      <div className={isDaySelected ? "selected-day" : "non-selected-day"}>
        {day}
      </div>
    );
  };

  return (
    <div className="date-picker-container">
      <p
        className="color=light p-3 fs-2"
        style={{
          marginBottom: ".5rem",
        }}
      >
        Pick a date
      </p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        renderDayContents={renderDayContents}
      />
    </div>
  );
};

export default DatePickerComp;
