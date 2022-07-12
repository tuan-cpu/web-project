import React, {useEffect, useState} from "react";
import Moment from "react-moment";
import "./index.scss";
import seatPriceMap from "../../../common/cinema/seatPrice";

const OrderInfo = ({ movie,selected }) => {
  var seat_count = selected.length;
  const [payment,setPayment] = useState(0);
  useEffect(()=>{
    const calcPayment = () =>{
      var temp = 0;
      for(let i=0;i<seat_count;i++){
        temp += seatPriceMap[selected[i]];
      }
      setPayment(temp);
    }
    calcPayment();
  },[selected,seat_count])
  const show_date = localStorage.getItem('date');
  useEffect(() => {
    var date = new Date();
    localStorage.setItem('total_payment',payment)
    localStorage.setItem('order_date',date);
  }, [seat_count,payment]);
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
            <Moment format="DD MMMM YYYY">{show_date}</Moment>
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
            <p className="bold-text">{payment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
