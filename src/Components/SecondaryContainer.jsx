import React from 'react'
import MovieList from './MovieList'

import { useSelector } from 'react-redux'

const SecondaryContainer = () => {


  const movies = useSelector(store => store.movies);

  console.log("its a SecondaryContainer")

  // its contain movie cards and details of each Movie

  // movieList => Trending , Now Playing ,Horror ,My list ,Comedies 
  return (
    // movieList
    // 2 things we want
    // 1. title of movieList like  Horror ,My list ,Comedies
    // 2 . movie description card   
        // for movie description card we already ve in redux store , we can get it by useSelctor
   
    <div className=' z-20 absolute top-[100%]'>
      { console.log("its a SecondaryContainer")}
            <MovieList 
             movieListTitle = {"Comedies"}
             movies = {movies.nowPlayingMovies}/>
          
     
     </div>
  )
}

export default SecondaryContainer