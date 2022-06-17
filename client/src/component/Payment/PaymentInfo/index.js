import React from "react";
import "./index.scss";

const PaymentInfo = () => {
  return (
    <div className="payment-info-section">
      <p className="bold-text">Payment Info</p>
      <div className="payment-info-body">
        <div className="inner-body">
          <div className="list-group">
            <div className="list-group-item">
              <p className="light-text float-left">Date & Time</p>
              <p className="light-text float-right">A time</p>
            </div>
            <div className="list-group-item">
              <p className="light-text float-left">Movie Title</p>
              <p className="light-text float-right">A title</p>
            </div>
            <div className="list-group-item">
              <p className="light-text float-left">Cinema name</p>
              <p className="light-text float-right">A cinema</p>
            </div>
            <div className="list-group-item">
              <p className="light-text float-left">Number of tickets</p>
              <p className="light-text float-right">3 pieces</p>
            </div>
            <div className="list-group-item last-item">
              <p className="light-text float-left">Total Payment</p>
              <p className="bold-text float-right">$300</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
