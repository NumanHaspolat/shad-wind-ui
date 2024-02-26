import React, { useState } from "react";
// import PreCode from "./PreCode";
import DatePickerComp from "../components/DatePickerComp";
import CodePreview from "./CodePreview";

const Date = () => {
  const [gap, setGap] = useState("1rem");
  return (
    <div>
      <span className="par-2">
        Docs {">"} <span className="bold color-light capital">Date Picker</span>
      </span>
      <h2 className="head">Date Picker</h2>
      <p className="par-3">A date picker component with range and presets.</p>
      <h5 className="head-2 border-bot p-3">Preview</h5>
      <div className="flex items-center jus-center">
        <DatePickerComp gap={gap} />
      </div>
      <h5 className="head-2 border-bot p-3">Code</h5>
      <div>
        <CodePreview
          code={`
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
          
        `}
        />
      </div>
      <p className="par-4">
        You can find more options on my repo
        <a
          className="gray"
          target="_blank"
          href="https://github.com/NumanHaspolat/shad-wind-ui"
        >
          GitHub
        </a>
      </p>
      <p className="par-4">
        As you can see there is one thing of option but dont forgot to use
        tailwind classes to more choices.
      </p>
    </div>
  );
};

export default Date;
