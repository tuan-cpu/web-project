import React, { useEffect } from "react";
import "./index.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../feature/movies/movieSlice";
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
                Runtime <i class="fa-solid fa-film"></i> :{data.Runtime}
              </span>
              <span>
                Year <i class="fa-solid fa-calendar"></i> :{data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <div>
                  <span>Director</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Genres</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
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
