import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movieListTitle , movies ,gpt}) => {
    // movies array of 20m ovies
     console.log("movieListTitle" , movieListTitle);
     console.log(movies ,gpt)
  return (
  

<div className={`  w-full  text-white md:px-28 px-10   mb-8 relative z-[15]   ${   (gpt=== false)? "top-24 md:bottom-96" : "bottom-0"}
     ${   (gpt=== true)? "bg-black" : ""}  ${   (gpt=== true)? "py-4" : "py-2"   }  overflow-x-scroll `  }>
        {/* px-44 */}
        {/* it has title of journal  and eachmovie card */}
         
        <h4 className='font-bold text-2xl md:text-3xl text-white h-1/2'
        >{movieListTitle}</h4>

        {/* <div className="flex  overflow-x-scroll mt-3  " >
          

            <div className='flex gap-2'> */}
            <div className="flex overflow-x-scroll  mt-4 gap-2 ">
            
                {
                   (movies) && ( movies.map( (eachMovie) =>{
                        return(
                            <MovieCard 
                             key={eachMovie.id}
                             posterPath={eachMovie.poster_path}
                             movieId={eachMovie.id}
                             overview ={eachMovie.overview}
                             original_title ={eachMovie.original_title }
                              className="w-[250px]  h-[300px]  md:w-[300px]  flex-shrink-0"
                             />
                        )
                    }) )
                
                }
               
            </div>
        </div>
    //   </div>


  
  )
}

export default MovieList