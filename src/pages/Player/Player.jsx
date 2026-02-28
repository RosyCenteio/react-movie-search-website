import React, { useEffect, useState } from 'react'
import Movie from '../../components/Ui/Movie'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Player.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import spinner from '../../assets/spinner.gif'
import { useLocation, useNavigate } from "react-router-dom";


const Player = () => {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();

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
              <div className='loading-spinner'>
                <img src={spinner} alt="" />
              </div>
          )   
          :
          (
            <>  
              <button className='btn__back' onClick={() => navigate("/", { state })}>← Back</button>
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
