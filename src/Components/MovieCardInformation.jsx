import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import Browse from './Browse';
import { useSelector } from 'react-redux';

const MovieCardInformation = () => {

  // const showTrailer = useSelector((store) => store.movieTrailer.showMovieTrailer);

  return (
    <div>
      <Header />
       <MainContainer />
         
        </div>
  )
}

export default MovieCardInformation;