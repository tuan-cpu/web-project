import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../feature/movies/movieSlice";
import "./index.scss";
import OrderSeat from "./OrderSeat";
import OrderInfo from "./OrderInfo";

const OrderPage = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow);
    };
  }, [dispatch, imdbID]);
  const [selected,setSelected] = useState([]);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div className="order-section">
      <div className="order-section-left">
      <p className="bold-text">Choose Your Seat</p>
        <div className="top">
        <OrderSeat selected={selected} setSelected={setSelected}/>
        </div>
        <div className="checkout">
          <Link to="/">
            <button>Change your movie</button>
          </Link>
          <Link to="payment">
            <button>Checkout now</button>
          </Link>
        </div>
      </div>
      <div className="order-section-right">
        <OrderInfo key={data.imdbID} movie={data} selected={selected} />
      </div>
    </div>
  );
};

export default OrderPage;
