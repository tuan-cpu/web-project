import React, {useEffect} from "react";
import "./index.scss";
import barcode from "../../image/barcode.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../feature/movies/movieSlice";

const Ticket = () => {
  var seat = localStorage.getItem('seats');
  var seat_count = localStorage.getItem('seat_count');
  var total_payment = localStorage.getItem('total_payment');
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
                      <p className="bold-text">Group 6 Cinema</p>
                      <p className="left-label">Admit one</p>
                    </div>
                    <div className="card-body">
                      <p className="info">Movie</p>
                      <p className="info-value">{data.Title}</p>
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
                          <p className="info-value">{seat_count} piece(s)</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Seats</p>
                          <p className="info-value">{seat}</p>
                        </div>
                        <div className="col-4">
                          <p className="info">Total Payment</p>
                          <p className="info-value-price">${total_payment}</p>
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
                            <p className="info-value">{data.Title}</p>
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
