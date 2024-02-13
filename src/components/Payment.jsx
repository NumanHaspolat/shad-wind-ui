import React from "react";
import { MdPayment } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="payment flex flex-col" id="Card">
      <h3>Payment Method</h3>
      <p>Add a new payment method to your account.</p>
      <div className="methods">
        <button className="method button-outlined transition-2 flex flex-col">
          <MdPayment fontSize={30} />
          Card
        </button>
        <button className="button-outlined transition-2 flex flex-col method">
          <FaPaypal fontSize={30} />
          Paypal
        </button>
        <button className="button-outlined transition-2 flex flex-col method">
          <FaApple fontSize={30} />
          Apple
        </button>
      </div>
    </div>
  );
};

export default Payment;
