import React, { useEffect, useState } from "react";
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
import GenreFilter from "../GenreFilter";

const AllMovie = () => {
  const { category } = useParams();
  const movies = useSelector(getAllMovies);
  const upcoming = useSelector(getUpcomingMovies);
  const loader = useSelector(getMoviesLoader);
  const genre_array = [];
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filteredUpcoming, setFilteredUpcoming] = useState(upcoming);
  const [activeGenre,setActiveGenre] = useState("all");
  if (category === "movies") {
    for (let movie of movies) {
      for (let genre of movie.genre) {
        if (!genre_array.includes(genre.name)) {
          genre_array.push(genre.name);
        }
      }
    }
  } else {
    for (let movie of upcoming) {
      for (let genre of movie.genre) {
        if (!genre_array.includes(genre.name)) {
          genre_array.push(genre.name);
        }
      }
    }
  }
  let renderMovies,
    renderUpcomingMovies = "";
  renderMovies =
    filteredMovies.length > 0 ? (
      filteredMovies.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderUpcomingMovies =
    filteredUpcoming.length > 0 ? (
      filteredUpcoming.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movie-error">
        <h3>{upcoming.Error}</h3>
      </div>
    );
  return (
    <div>
      <GenreFilter
        genres={genre_array}
        movies={movies}
        upcoming={upcoming}
        setFilteredMovies={setFilteredMovies}
        setFilteredUpcoming={setFilteredUpcoming}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
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
    </div>
  );
};

export default AllMovie;
