import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



const Movie = ({movie,movies,searchField, className}) => {
  
  const navigate = useNavigate();

  const goToMovie = (movie) => {
    navigate(`/${movie.imdbID}`, {
    state: {
      movies,
      searchField,
    },
  });
  };

  return (  
    <div className={className}>
        <div className="movie__img--wrapper" onClick={() => goToMovie(movie)}>
          <img className="movie__img" src={movie.Poster} alt="" />
        </div>
        <div className="movie__title">
          {movie.Title}
        </div>
        <div className="movie__sub-title">
          {movie.Year}
        </div>
    </div>
  )
}

export default Movie
