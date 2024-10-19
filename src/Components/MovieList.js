import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movieListTitle , movies}) => {
    // movies array of 20m ovies
   
  return (
    <div className=' w-screen text-white px-28 py-2 mb-8 relative z-[15] bottom-96   '>
        {/* px-44 */}
        {/* it has title of journal  and eachmovie card */}

        <h4 className='font-bold'
        >{movieListTitle}</h4>

        <div className="flex overflow-x-scroll mt-3 " >
          

            <div className='flex gap-2'>
                {
                   (movies) && ( movies.map( (eachMovie) =>{
                        return(
                            <MovieCard 
                            key={eachMovie.id}
                             posterPath={eachMovie.poster_path}/>
                        )
                    }) )
                
                }
               
            </div>
        </div>
      </div>
  )
}

export default MovieList