import React from "react";
import Moment from "react-moment";
import "./index.scss";

const OrderInfo = ({ movie,selected }) => {
  return (
    <div className="info-section">
      <p className="bold-text">Order Info</p>
      <div className="info-body">
        <div className="info-top">
          <div className="text-section">
            <p>Title</p>
            <p>{movie.Title}</p>
          </div>
          <div className="text-section">
            <Moment format="DD MMMM YYYY">{21 / 5 / 2022}</Moment>
            <Moment format="DD MMMM YYYY">Date</Moment>
          </div>
          <div className="text-section">
            <p>One ticket Price</p>
            <p>$100</p>
          </div>
          <div className="text-section">
            <p>Seats</p>
            <p>{selected.map((seat)=> seat+' ')}</p>
          </div>
        </div>
        <hr />
        <div className="info-bot">
          <div className="text-section">
            <p className="bold-text-md">Total Payment</p>
            <p className="bold-text">$300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
