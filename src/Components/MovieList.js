import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movieListTitle , movies}) => {
    console.log("movies" ,movies);
  return (
    <div className='bg-white w-screen'>
        {/* it has title of journal  and eachmovie card */}
        <div>
            <h1>{movieListTitle}</h1>
            <div>
                <MovieCard />
            </div>
        </div>
      </div>
  )
}

export default MovieList