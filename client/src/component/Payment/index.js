import React from "react";
import PaymentInfo from "./PaymentInfo";
import PaymentMethod from "./PaymentMethod";
import "./index.scss";

const Payment = () => {
  return (
    <div className="payment-section">
      <div className="section-wrapper">
        <PaymentInfo />
      </div>
      <div className="section-wrapper">
        <PaymentMethod />
      </div>
    </div>
  );
};

export default Payment;
