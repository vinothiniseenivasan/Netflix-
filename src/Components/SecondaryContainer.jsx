import React from 'react'
import MovieList from './MovieList'

import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

  import usePopMovies from '../hooks/usePopMovies';

const SecondaryContainer = () => {


  // useNowPlayingMovies();
  //  usePopMovies();

  const movies = useSelector(store => store.movies);

   console.log("movies.getPopularMovies" , movies.getPopularMovies)

  // its contain movie cards and details of each Movie

  // movieList => Trending , Now Playing ,Horror ,My list ,Comedies 
  return (
    // movieList
    // 2 things we want
    // 1. title of movieList like  Horror ,My list ,Comedies
    // 2 . movie description card   
        // for movie description card we already ve in redux store , we can get it by useSelctor
   
    <div className=''>
      {/* { console.log("its a SecondaryContainer")} */}
            <MovieList 
             movieListTitle = {"Comedies"}
             movies = {movies.nowPlayingMovies}/>
              <MovieList 
             movieListTitle = {"Popular Movies"}
             movies = {movies.getPopularMovies}/>
              <MovieList 
             movieListTitle = {"Family Tv Favorites"}
             movies = {movies.getTrendingMovies}/>
              <MovieList 
             movieListTitle = {"Kids Movies"}
             movies = {movies.getThirllerMovies}/>
          
     
     </div>
  )
}

export default SecondaryContainer