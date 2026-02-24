import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({movie, id}) => {
  return (
    <div className="movie" key={id}>
        <Link to={`/${movie.imdbID}`} className="movie__img--wrapper">
          <img className="movie__img" src={movie.Poster} alt="" />
        </Link>
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
