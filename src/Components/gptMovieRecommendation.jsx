import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieRecommendation = () => {

  // get from redux sotre
   const gpt = useSelector((store) => store.gpt);

   const {gptMovies ,movieSuggestion} = gpt;
   console.log(gptMovies ,movieSuggestion);

   if(!movieSuggestion)
   {
    // no movies
    return null;
   }
  return (
    <div>gptMovieRecommendation</div>
  )
}

export default GptMovieRecommendation;