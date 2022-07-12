import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../image/user.png";
import { useDispatch } from "react-redux/es/exports";
import {
  fetchAsyncMovies,
  fetchAsyncUpcomingMovies,
} from "../../feature/movies/movieSlice";
import { postAsyncLogout } from "../../feature/auths/authSlice";
import "./index.scss";
import movieApi from "../../common/api/movieApi";

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
      navigate(`/search/${term}`);
    }
  };
  const [logged, setLogged] = useState(401);
  useEffect(() => {
    const auth = async () => {
      const res = await movieApi.get("user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      });
      setLogged(res.status);
    };
    auth();
  }, [localStorage.getItem("user_token")]);
  useEffect(()=>{
    if(logged === 201){
      localStorage.setItem("logged","logged");
    }else{
      localStorage.setItem("logged","not log");
    }
  },[logged]);
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
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {logged === 201 ? (
        <div className="auth">
          <div className="user-image">
            <Link to="/profile">
              <img src={user} alt="user" />
            </Link>
          </div>
          <button
            onClick={() => {
              dispatch(postAsyncLogout(localStorage.getItem("user_token")));
              localStorage.removeItem("user_token");
              setLogged(401);
            }}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="auth">
          <button onClick={() => navigate("/signin")}>Sign In</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Header;
