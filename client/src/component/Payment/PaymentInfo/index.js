import React, {useEffect} from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../../feature/movies/movieSlice";
import Moment from "react-moment";

const PaymentInfo = () => {
  const imdbID = localStorage.getItem('imdbID');
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow);
    };
  }, [dispatch, imdbID]);
  var seat_count = localStorage.getItem('seat_count');
  var total_payment = localStorage.getItem('total_payment');
  var order_date = localStorage.getItem('order_date');
  var show_date = localStorage.getItem('date');
  var cinema_name = localStorage.getItem('cinema_name');
  return (
    <div className="payment-info-section">
      <p className="bold-text">Payment Info</p>
      <div className="payment-info-body">
        <div className="inner-body">
          <div className="list-group">
            <div className="list-group-item">
              <p className="light-text float-left">Order Date</p>
              <p className="light-text float-right"><Moment format="DD MMMM YYYY">{order_date}</Moment></p>
            </div>
            <div className="list-group-item">
              <p className="light-text float-left">Show Date</p>
              <p className="light-text float-right"><Moment format="DD MMMM YYYY">{show_date}</Moment></p>
            </div>
            <div className="list-group-item">
              <p className="light-text float-left">Movie Title</p>
              <p className="light-text float-right">{data.title}</p>
            </div>
            <div className="list-group-item">
              <p className="light-text float-left">Cinema</p>
              <p className="light-text float-right">{cinema_name}</p>
            </div>
            <div className="list-group-item">
              <p className="light-text float-left">Number of tickets</p>
              <p className="light-text float-right">{seat_count} piece(s)</p>
            </div>
            <div className="list-group-item last-item">
              <p className="light-text float-left">Total Payment</p>
              <p className="bold-text float-right">{total_payment} vnd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
