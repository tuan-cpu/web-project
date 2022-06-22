import React,{ useEffect } from "react";
import MovieListing from '../MovieListing';
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../feature/movies/movieSlice";
import { useParams } from "react-router-dom";
const Home = () =>{
    const { keyword } = useParams();
    const dispatch = useDispatch();
    let movieText = "";
    if(keyword === undefined){
        movieText = "Gundam";
    }else{
        movieText = keyword;
    }
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
    }, [dispatch,movieText]);
    return(
        <div>
        <div className="banner-image"></div>
        <MovieListing/>
        </div>
    )
}

export default Home;