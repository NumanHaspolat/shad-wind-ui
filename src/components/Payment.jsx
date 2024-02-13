import React, { useState } from "react";
import { MdPayment } from "react-icons/md";
import { FaPaypal, FaApple } from "react-icons/fa";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleClick = (method) => {
    setSelectedMethod(method);
    console.log(method);
  };

  const getButtonClass = (method) => {
    let baseClass = "method button-outlined transition-1 flex flex-col";
    if (method === selectedMethod) {
      baseClass += " selected";
    }
    return baseClass;
  };

  return (
    <div className="payment flex flex-col" id="Card">
      <h3 className="head">Payment Method</h3>
      <p className="par-2">Add a new payment method to your account.</p>
      <div className="methods">
        <button
          className={getButtonClass("Card")}
          onClick={() => handleClick("Card")}
        >
          <MdPayment fontSize={30} />
          Card
        </button>
        <button
          className={getButtonClass("Paypal")}
          onClick={() => handleClick("Paypal")}
        >
          <FaPaypal fontSize={30} />
          Paypal
        </button>
        <button
          className={getButtonClass("Apple")}
          onClick={() => handleClick("Apple")}
        >
          <FaApple fontSize={30} /> Apple
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
