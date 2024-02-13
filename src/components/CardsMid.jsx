import React from "react";
import DatePickerComp from "./DatePickerComp";
import TeamMem from "./TeamMem";

const CardsMid = () => {
  return (
    <div className="flex flex-col gap-5">
      <DatePickerComp />
      <TeamMem />
    </div>
  );
};

export default CardsMid;
