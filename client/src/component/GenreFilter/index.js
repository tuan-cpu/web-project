import React, { useEffect } from "react";
import './index.scss';

const GenreFilter = (props) =>{
    const {genres,activeGenre,setActiveGenre,setFilteredMovies,setFilteredUpcoming,movies,upcoming} = props;

    useEffect(() => {
        if(activeGenre === 'all'){
            setFilteredMovies(movies);
            setFilteredUpcoming(upcoming);
            return;
        }
        const filteredMovies = [];
        for(let movie of movies){
            for(let genre of movie.genre){
                if(genre.name === activeGenre){
                    filteredMovies.push(movie);
                    break;
                }
            }
        }
        setFilteredMovies(filteredMovies);
        const filteredUpcoming = [];
        for(let movie of upcoming){
            for(let genre of movie.genre){
                if(genre.name === activeGenre){
                    filteredUpcoming.push(movie);
                    break;
                }
            }
        }
        setFilteredUpcoming(filteredUpcoming);
    }, [activeGenre]);
    return(
        <div className="filter_container">
            <button 
            className={activeGenre === 'all'?"active":""}
            onClick={()=>setActiveGenre('all')}>All</button>
            {genres.map((genre)=>(
                <button
                className={activeGenre === genre?"active":""}
                onClick={()=>setActiveGenre(genre)}>{genre}</button>
            ))}
        </div>
    )
}

export default GenreFilter;