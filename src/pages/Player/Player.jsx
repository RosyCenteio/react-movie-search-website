import React, { useEffect, useState } from 'react'
import Movie from '../../components/Ui/Movie'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Player.css'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'


const Player = () => {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  async function fetchMovies(){
      setLoading(true);
      const { data } = await axios.get(`https://omdbapi.com/?apikey=dbb08697&i=${id}`);
      setMovie(data)
      console.log(data);
      setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  },[])


  return (
    <>
        <Nav />
        { loading ? 
          (
              <div className="movie">
                <div className="movie__img--skeleton"></div>
                <div className="skeleton movie__title--skeleton"></div>
                <div className="skeleton movie__sub-title--skeleton"></div>
              </div>
          )   
          :
          (
            <>
              <Link to="/">
                 <button className='btn__back'>← Back</button>
              </Link> 
              <div className='movie_info'>
                <Movie movie={movie} className={"movie__detail"}/>
                <div className='movie__info--description'>
                  <p><span className='bold'>Genre:</span> {movie.Genre}</p>
                  <p><span className='bold'>Language:</span>  {movie.Language}</p>
                  <p><span className='bold'>Description:</span>  {movie.Plot}</p>
                </div>
              </div>
            </>
            
          )
        }
        <Footer />
    </>

  )
}

export default Player
