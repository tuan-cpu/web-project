import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../feature/movies/movieSlice";
import './index.scss'
import OrderSeat from "./OrderSeat";
import OrderInfo from './OrderInfo';

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
  return(
      <div className="order-section">
          <div className="order-section-left">
              <OrderSeat/>
          </div>
          <div className="order-section-right">
              <OrderInfo key={data.imdbID} movie={data}/>
          </div>
      </div>
  )
};

export default OrderPage;
