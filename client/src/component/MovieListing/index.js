import React from "react";
import {
  getAllMovies,
  getMoviesLoader,
  getUpcomingMovies,
} from "../../feature/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import "./index.scss";
import CardSkeleton from "../MovieCard/cardSkeleton";
import { Link } from "react-router-dom";
const MovieListing = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const movies = useSelector(getAllMovies);
  const upcomingMovies = useSelector(getUpcomingMovies);
  const loader = useSelector(getMoviesLoader);
  let renderMovies,
    renderUpcomingMovies = "";
  renderMovies =
    movies.length > 0 ? (
      movies.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderUpcomingMovies =
    upcomingMovies.length > 0 ? (
      upcomingMovies.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{upcomingMovies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-list-label">
          <h2>Now playing</h2>
          <Link to="/all/movies">See All</Link>
        </div>
        {loader ? (
          <div className="movie-container">
            <Slider {...settings}>
              <CardSkeleton />
            </Slider>
          </div>
        ) : (
          <div className="movie-container">
            {renderMovies.length > 6 ? (
              <Slider {...settings}>{renderMovies}</Slider>
            ) : (
              <div className="listing">{renderMovies}</div>
            )}
          </div>
        )}
      </div>
      <div className="movie-list">
        <div className="movie-list-label">
          <h2>Upcoming Movies</h2>
          <Link to="/all/upcoming">See All</Link>
        </div>
        {loader ? (
          <div className="movie-container">
            <Slider {...settings}>
              <CardSkeleton />
            </Slider>
          </div>
        ) : (
          <div className="movie-container">
            {renderUpcomingMovies.length > 6 ? (
              <Slider {...settings}>{renderUpcomingMovies}</Slider>
            ) : (
              <div className="listing">{renderUpcomingMovies}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
