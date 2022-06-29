import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../image/user.png";
import { useDispatch } from "react-redux/es/exports";
import {
  fetchAsyncMovies,
  fetchAsyncUpcomingMovies,
} from "../../feature/movies/movieSlice";
import "./index.scss";

const Header = () => {
    let navigate = useNavigate();
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submit_handler = (e) => {
    e.preventDefault();
    if (term === "") alert("Please enter search term!");
    else {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncUpcomingMovies(term));
      setTerm("");
      navigate(`/${term}`);
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/"> Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submit_handler}>
          <input
            type={"text"}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search for Movie"
          />
          <button type="submit">
            <i class="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="user-image">
        <Link to="/signin">
        <img src={user} alt="user" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
