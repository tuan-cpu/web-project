import React from "react";
import "./index.scss";
import barcode from "../../image/barcode.svg";

const Ticket = () => {
  return (
    <div className="ticket-section">
      <div className="container">
        <div className="card">
          <div className="ticket-body">
            <p className="bold-text-center">Proof of Payment</p>
            <div className="card">
              <div className="row">
                <div className="col">
                  <div className="left-ticket">
                    <div className="header-info">
                      <p className="bold-text">Group 6 Cinema</p>
                      <p className="left-label">Admit one</p>
                    </div>
                    <div className="card-body">
                      <p className="info">Movie</p>
                      <p className="info-value">A title</p>
                      <div className="row-inner">
                        <div className="col-4">
                          <p className="info">Date</p>
                          <p className="info-value">A Date</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Time</p>
                          <p className="info-value">A Time</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Category</p>
                          <p className="info-value">PG-13</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Count</p>
                          <p className="info-value">3 pieces</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Seats</p>
                          <p className="info-value">A1 A2 A3</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Total Payment</p>
                          <p className="info-value-price">$300</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="right-ticket">
                    <div className="header-info">
                      <p className="bold-text">Group 6 Cinema</p>
                    </div>
                    <div className="card-body">
                      <div className="row-inner">
                        <div className="col-10">
                          <div className="col-6">
                            <p className="info">Movie</p>
                            <p className="info-value">A title</p>
                          </div>
                          <div className="col-6">
                            <p className="info">Date</p>
                            <p className="info-value">A Date</p>
                          </div>
                          <div className="col-6">
                            <p className="info">Time</p>
                            <p className="info-value">A Time</p>
                          </div>
                          <div className="col-6">
                            <p className="info">Category</p>
                            <p className="info-value">PG-13</p>
                          </div>
                          <div className="col-6">
                            <p className="info">Count</p>
                            <p className="info-value">3 pieces</p>
                          </div>
                          <div className="col-6">
                            <p className="info">Seats</p>
                            <p className="info-value">A1 A2 A3</p>
                          </div>
                        </div>
                        <div className="col-2">
                          <img src={barcode} alt="1" />
                          <img src={barcode} alt="2" />
                          <img src={barcode} alt="3" />
                          <img src={barcode} alt="4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
