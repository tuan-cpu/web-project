import React,{ useEffect } from "react";
import MovieListing from '../MovieListing';
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../feature/movies/movieSlice";
import { useParams } from "react-router-dom";
const Home = () =>{
    const { keyword } = useParams();
    const dispatch = useDispatch();
    let movieText = "";
    let showText = "";
    if(keyword === undefined){
        movieText = "Gundam";
        showText = "Friend";
    }else{
        movieText = keyword;
        showText = keyword;
    }
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch,movieText,showText]);
    return(
        <div>
        <div className="banner-image"></div>
        <MovieListing/>
        </div>
    )
}

export default Home;