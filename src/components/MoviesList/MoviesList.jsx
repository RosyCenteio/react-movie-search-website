import React, { useEffect, useState } from 'react'
import "./MoviesList.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Movie from '../Ui/Movie';
import spinner from '../../assets/spinner.gif'

const MoviesList = () => {

    let defaultTitle = "God";
    const [searchField, setSearchField] = useState("");
    const[loading, setLoading] = useState(true);
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
        searchMovies(defaultTitle, "");
    },[])


    function filterMovies (filter){
        if(filter === 'NEW_TO_OLD'){
            setMovies({Search: movies.Search.sort((a,b) => b.Year- a.Year)});
        }
         else if(filter === 'OLD_TO_NEW'){
            setMovies({Search: movies.Search.sort((a,b) => a.Year- b.Year)});
        }
        console.log(movies.Search);
    }



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
            <select id='filter' defaultValue="DEFAULT" onChange={(event) => filterMovies (event.target.value)}>
                <option value="DEFAULT" disabled>Sort</option>
                <option value="NEW_TO_OLD">Newest to Oldest</option>
                <option value="OLD_TO_NEW">Oldest to Newest</option>
            </select>
          </div> 
          <div className="movies">
              {
                  movies !== undefined && movies.Search !== undefined && movies.Search.length > 0 ? (
                    movies.Search.map((movie, index) => {
                        return (
                          <React.Fragment key={index}>
                            { loading ? 
                              (
                                <>
                                  <div className="movie">
                                    <div className="movie__img--skeleton"></div>
                                    <div className="skeleton movie__title--skeleton"></div>
                                    <div className="skeleton movie__sub-title--skeleton"></div>
                                  </div>
                                </>
                              )   
                              :
                              (
                                <Movie movie={movie} id={index} className={"movie"} />
                              )
                            }
                        </React.Fragment>
                        )
                     })
                  ) : 
                  (
                    loading ? 
                      (
                        <div className='loading-spinner'>
                          <img src={spinner} alt="" />
                        </div>
                      ) : (
                        <div className='not__found--results'> No results Found</div>                                       
                      )
                  )
                }
            
            
          </div>
        </div>
      </div>
  )
}

export default MoviesList
