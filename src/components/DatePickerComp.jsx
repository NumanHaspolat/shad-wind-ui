import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const DatePickerComp = ({ gap }) => {
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
        className="color-light p-3 fs-2"
        style={{
          marginBottom: ".5rem",
        }}
      >
        Pick a date
      </p>
      <div className="flex space-between">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          renderDayContents={renderDayContents}
        />
        <button
          style={{
            marginLeft: gap,
          }}
          className="button-filled transition-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DatePickerComp;
