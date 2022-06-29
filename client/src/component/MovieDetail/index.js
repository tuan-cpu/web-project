import React, { useEffect } from "react";
import "./index.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../feature/movies/movieSlice";
import Moment from "react-moment";
import YoutubeEmbed from "./YoutubeEmbed";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow);
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>{"...Loading"}</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i class="fa-solid fa-star"></i> :{data.imdbRating}
              </span>
              <span>
                IMDB Votes <i class="fa-solid fa-thumbs-up"></i> :
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i class="fa-solid fa-film"></i> :{data.runtime}
              </span>
              <span>
                Year <i class="fa-solid fa-calendar"></i> : <Moment format="MMMM DD YYYY">{data.released}</Moment>
              </span>
            </div>
            <div className="movie-plot">{data.description}</div>
            <div className="movie-info">
              <div>
                <div>
                  <span>Director</span>
                  <span>{data.director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{data.actors.map((actor)=>{
                    return ` ${actor} |`;
                  })}</span>
                </div>
                <div>
                  <span>Genres</span>
                  <span>{data.genre.map((gen)=>{
                    return ` ${gen.name} |`;
                  })}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{data.languages}</span>
                </div>
                <div>
                  <span>Trailer</span>
                  <span><YoutubeEmbed url={data.trailer}/></span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.poster} alt={data.title} />
            <button
              onClick={() => {
                localStorage.setItem('imdbID',imdbID)
                navigate("/order");
              }}
            >
              Book a Seat
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
