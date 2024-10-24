import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieRecommendation = () => {

  // get from redux sotre
   const gpt = useSelector((store) => store.gpt);

   const {gptMovies ,movieSuggestion} = gpt;
   console.log("gptMovies" ,gptMovies);

   if(!movieSuggestion || !gptMovies)
   {
    // no movies
    return null;
   }
  return (
    <div className='m-4 mx-72  text-white relative z-10 bg-opacity-90  '>

      {gptMovies.map((eachMovie , index)=> {
          //  { console.log("eachMovie.length" ,movieSuggestion[index])}
    
      return(
       ( (eachMovie.length >0)  &&
          <MovieList
          key={index}
          movieListTitle = {movieSuggestion[index]}
          movies={ gptMovies[index]}
          gpt={true}
/>
        ) ) } )
        }
      
     
      

   
      {/* {movieSuggestion[0]} */}

     </div>
  )
}

export default GptMovieRecommendation;