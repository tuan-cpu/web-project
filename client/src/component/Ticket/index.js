import React, {useEffect} from "react";
import "./index.scss";
import barcode from "../../image/barcode.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../feature/movies/movieSlice";
import Moment from 'react-moment';

const Ticket = () => {
  var seat = localStorage.getItem('seats');
  var seat_count = localStorage.getItem('seat_count');
  var total_payment = localStorage.getItem('total_payment');
  var show_date = localStorage.getItem('date');
  var cinema_name = localStorage.getItem('cinema_name');
  const imdbID = localStorage.getItem('imdbID');
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow);
    };
  }, [dispatch, imdbID]);
  return (
    <div className="ticket-section">
      <div className="ticket-container">
        <div className="card">
          <div className="ticket-body">
            <p className="bold-text-center">Proof of Payment</p>
            <div className="card">
              <div className="row">
                <div className="col">
                  <div className="left-ticket">
                    <div className="header-info">
                      <p className="bold-text">{cinema_name}</p>
                      <p className="left-label">Admit one</p>
                    </div>
                    <div className="card-body">
                      <p className="info">Movie</p>
                      <p className="info-value">{data.title}</p>
                      <div className="row-inner">
                        <div className="col-4">
                          <p className="info">Date</p>
                          <Moment format="DD MMMM YYYY" className="info-value">{show_date}</Moment>
                        </div>
                        <div className="col-4">
                          <p className="info">Time</p>
                          <Moment format="hh:mm" className="info-value">{show_date}</Moment>
                        </div>
                        <div className="col-4">
                          <p className="info">Category</p>
                          <p className="info-value">PG-13</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Count</p>
                          <p className="info-value">{seat_count} piece(s)</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Seats</p>
                          <p className="info-value">{seat}</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Total Payment</p>
                          <p className="info-value-price">{total_payment} vnd</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="right-ticket">
                    <div className="header-info">
                      <p className="bold-text">{cinema_name}</p>
                    </div>
                    <div className="card-body">
                      <div className="row-inner">
                        <div className="col-10">
                          <div className="col-6">
                            <p className="info">Movie</p>
                            <p className="info-value">{data.title}</p>
                          </div>
                          <div className="col-6">
                            <p className="info">Date</p>
                            <Moment format="DD MMMM YYYY" className="info-value">{show_date}</Moment>
                          </div>
                          <div className="col-6">
                            <p className="info">Time</p>
                            <Moment format="hh:mm" className="info-value">{show_date}</Moment>
                          </div>
                          <div className="col-6">
                            <p className="info">Category</p>
                            <p className="info-value">PG-13</p>
                          </div>
                          <div className="col-6">
                            <p className="info">Count</p>
                            <p className="info-value">{seat_count} piece(s)</p>
                          </div>
                          <div className="col-6">
                            <p className="info">Seats</p>
                            <p className="info-value">{seat}</p>
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
