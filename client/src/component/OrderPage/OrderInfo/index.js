import React, {useEffect} from "react";
import Moment from "react-moment";
import "./index.scss";

const OrderInfo = ({ movie,selected }) => {
  var ticket_price = 100;
  var seat_count = selected.length;
  useEffect(() => {
    var date = new Date();
    localStorage.setItem('total_payment',seat_count*ticket_price)
    localStorage.setItem('order_date',date);
  }, [seat_count,ticket_price]);
  return (
    <div className="info-section">
      <p className="bold-text">Order Info</p>
      <div className="info-body">
        <div className="info-top">
          <div className="text-section">
            <p>Title</p>
            <p>{movie.title}</p>
          </div>
          <div className="text-section">
            <p>Date</p>
            <Moment format="DD MMMM YYYY">1976-04-19T12:59-0500</Moment>
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
            <p className="bold-text">${seat_count*ticket_price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
