import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data._id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.poster} alt={data.title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.title}</h4>
              <p>
                <Moment format="DD/MM/YYYY">{data.released}</Moment>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
