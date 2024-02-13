import React from "react";
import FakeRepo from "./FakeRepo";
import Notif from "./Notif";

const CardsRight = () => {
  return (
    <div className="flex gap-5 flex-col">
      <FakeRepo />
      <Notif />
    </div>
  );
};

export default CardsRight;
