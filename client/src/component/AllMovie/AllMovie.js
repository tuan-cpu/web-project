import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getMoviesLoader,
  getUpcomingMovies,
} from "../../feature/movies/movieSlice";
import CardSkeleton from "../MovieCard/cardSkeleton";
import MovieCard from "../MovieCard";

const AllMovie = () => {
  const { category } = useParams();
  const movies = useSelector(getAllMovies);
  const upcoming = useSelector(getUpcomingMovies);
  const loader = useSelector(getMoviesLoader);
  console.log(movies);
  let renderMovies,
    renderUpcomingMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderUpcomingMovies =
    upcoming.Response === "True" ? (
      upcoming.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{upcoming.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list-all">
        {loader ? (
          <div className="movie-container-all">
            <CardSkeleton />
          </div>
        ) : category === "movies" ? (
          <div className="movie-container-all">{renderMovies}</div>
        ) : (
          <div className="movie-container-all">{renderUpcomingMovies}</div>
        )}
      </div>
    </div>
  );
};

export default AllMovie;
