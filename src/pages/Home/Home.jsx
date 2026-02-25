import React from 'react'
import "./Home.css"
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import MoviesList from '../../components/MoviesList/MoviesList'

const Home = () => {
  return (
    <div>
      <Nav />
      <MoviesList />
      <Footer />
    </div>
  )
}

export default Home
