import React from "react";
import { MdPayment } from "react-icons/md";
import { FaPaypal } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="payment flex flex-col" id="Card">
      <h3 className="head">Payment Method</h3>
      <p className="par-2">Add a new payment method to your account.</p>
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
      <div className="payment-inputs">
        <input
          type="text"
          className="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Name"
        />
        <input
          type="text"
          className="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Card number"
        />
      </div>

      <div className="card-info flex  gap-4">
        <input
          type="text"
          className="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Expires"
        />
        <input
          type="text"
          className="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Year"
        />
        <input
          type="text"
          className="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="CVC"
        />
      </div>
      <button className="button-filled transition-1">Continue</button>
    </div>
  );
};

export default Payment;
