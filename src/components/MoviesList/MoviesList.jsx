import React, { useEffect, useState } from 'react'
import "./MoviesList.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Movie from '../Ui/Movie';

const MoviesList = () => {

    let defaultTitle = "God";
    const [searchField, setSearchField] = useState("");
    const[loading, setLoading] = useState(false);
    const[movies, setMovies] = useState({Search: []});

    function onKeyPress(key){
        if(key === 'Enter'){
            onSearch();
        }
    }

    async function onSearch(){
      if(searchField && searchField !== ""){
        searchMovies(searchField)

      }
      else{
        searchMovies(defaultTitle);
      }

    }


    async function searchMovies(title, category) {
      let api = `https://omdbapi.com/?apikey=dbb08697&s=`;
      if(title && title !== ''){
        api += `${title}`;
      }
      else{
        api += `${defaultTitle}`
      }
        

        // search by category
        if(category && category !== ''){
          api += `&type=${category}`
        }
        
        console.log(api);
        setLoading(true);
        const { data } = await axios.get(api)
        console.log(data)
        setMovies(data);
        setLoading(false);
    }

    useEffect(() => {

        searchMovies(defaultTitle);

    },[])



  return (
    <div className="container">
        <div className="row">

          <div className="search-box">
            <input id="input" type="text" placeholder="Search..." value={searchField} 
                onChange={(event) => setSearchField(event.target.value)}
                onKeyPress={(event) => onKeyPress(event.key)} />

            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="category__search">
            <button className="category__search--title" onClick={() => {searchMovies(searchField,"movie")}}>Movies</button>
            <button className="category__search--title"onClick={() => {searchMovies(searchField,"series")}}>Series</button>  
          </div>

          <div className="movies">
            {
                movies.Search.map((movie, index) => {
                    return (
                      <>
                      { loading ? 
                        (
                          <>
                            <div className="movie" key={index}>
                              <div className="movie__img--skeleton"></div>
                              <div className="skeleton movie__title--skeleton"></div>
                              <div className="skeleton movie__sub-title--skeleton"></div>
                            </div>
                          </>
                        )   
                        :
                        (
                          <Movie movie={movie} id={index}/>
                        )
                      }

                      </>
                    )
                })
            }
            
          </div>
        </div>
      </div>
  )
}

export default MoviesList
