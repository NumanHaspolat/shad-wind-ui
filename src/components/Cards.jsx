import React from "react";
import Register2 from "./Register2";
import Payment from "./Payment";
import CardsRight from "./CardsRight";
import ShareDoc from "./ShareDoc";
import CardsMid from "./CardsMid";
import Mails from "./Mails";

const Cards = () => {
  return (
    <div id="Cards">
      <Register2 />
      <CardsMid />
      <CardsRight />
      <ShareDoc />
      <Payment />
      <Mails />
    </div>
  );
};

export default Cards;
