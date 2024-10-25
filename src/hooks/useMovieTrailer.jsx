// import React from 'react';
import { useEffect } from 'react';
import { TMDB_API_OPTIONS } from '../Utils/constant';
// import { setDoc } from 'firebase/firestore/lite';

import { useDispatch } from 'react-redux';
import { addGetTrailerKey } from '../Utils/movieSlice';

const useMovieTrailer = ( movieId) => {
   

  console.log("movieId" ,movieId)
   
    const dispatch = useDispatch();

 async  function getMovieVideos()
  {
   const data =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_OPTIONS);

   const jsonInfo =await data?.json();

     console.log("jsonInfo" , jsonInfo?.results);

   const filterMovieTrailorVideos = jsonInfo?.results?.filter((eachMovie)=>{
    // console.log("eachMovie,title" ,eachMovie.title)
     return(
      
            eachMovie.type === "Trailer"
     )  
   })
// it has 4 trailor videos
//    console.log("movieTrailor" ,filterMovieTrailorVideos);

  //  there is a case no trailor video in that case just take first video which has any type
 const firstTrailorType  = (filterMovieTrailorVideos!== undefined && filterMovieTrailorVideos?.length === 0) ? jsonInfo?.results[0] : filterMovieTrailorVideos[0];

//  console.log("firstTrailorType" ,firstTrailorType.key);
//  dispatch an action to store ket of trailervideo
 dispatch(addGetTrailerKey(firstTrailorType.key));

  }

      useEffect(()=>{
        getMovieVideos();
      },[]);
}

export default useMovieTrailer