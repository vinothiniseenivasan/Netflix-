import React, { useEffect } from 'react';
import { TMDB_API_OPTIONS } from '../Utils/constant';
import { setDoc } from 'firebase/firestore/lite';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGetTrailerKey } from '../Utils/movieSlice';

const VideoBackground = ({ movieId }) => {


      const dispatch = useDispatch();

       const trailerKey = useSelector(store => store?.movies?.getMovieVideos);
      //  console.log("trailerKey" ,trailerKey)


 async  function getMovieVideos()
  {
   const data =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_OPTIONS);

   const jsonInfo =await data.json();

  //  console.log("jsonInfo" , jsonInfo.results);

   const filterMovieTrailorVideos = jsonInfo.results.filter((eachMovie)=>{
    // console.log("eachMovie,title" ,eachMovie.title)
     return(
      
            eachMovie.type === "Trailer"
     )  
   })
// it has 4 trailor videos
   console.log("movieTrailor" ,filterMovieTrailorVideos);

  //  there is a case no trailor video in that case just take first video which has any type
 const firstTrailorType  = ( filterMovieTrailorVideos.length === 0) ? jsonInfo.results[0] : filterMovieTrailorVideos[0];

 console.log("firstTrailorType" ,firstTrailorType.key);
//  dispatch an action to store ket of trailervideo
 dispatch(addGetTrailerKey(firstTrailorType.key));

  }

      useEffect(()=>{
        getMovieVideos();
      },[]);
  return (
    <div>
     <iframe 
     width="560"
      height="315"
      // here embed/VUCNBAmse04 => key is not dynamic 
      // so how to get dynamic key from movieId
      // 1st way is using useState
      // 2 nd way is using redux store

       src={`https://www.youtube.com/embed/${trailerKey}?si=YGOAe3X2HWYm5uAc`}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
          >
     </iframe>
    </div>
  )
}

export default VideoBackground;