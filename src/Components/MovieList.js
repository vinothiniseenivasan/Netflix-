import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movieListTitle , movies ,gpt}) => {
    // movies array of 20m ovies
     console.log("movieListTitle" , movieListTitle);
     console.log(movies ,gpt)
  return (
  

<div className={`  w-full  text-white px-28   mb-8 relative z-[15]   ${   (gpt=== false)? "bottom-96" : "bottom-0"}
     ${   (gpt=== true)? "bg-black" : ""}  ${   (gpt=== true)? "py-4" : "py-2"}` }>
        {/* px-44 */}
        {/* it has title of journal  and eachmovie card */}
         
        <h4 className='font-bold text-3xl text-white h-1/2'
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