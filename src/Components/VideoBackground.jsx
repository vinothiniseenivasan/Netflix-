import React from 'react';

import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({ movieId }) => {


    // useMovieTrailer is a custom hook
    // its used to fetch data from api and get the videos of trilor === type
    // we ve 4 video
    //  we want only one video
    // get that one video 
    //  get that oneVideoTrailer Key store into redux
    useMovieTrailer(movieId);
      
      // get trailerKey from redux by using useSelector
       const trailerKey = useSelector(store => store?.movies?.getTrailerKey);
        // console.log("trailerKey" ,trailerKey)
    
  return (
     // here embed/VUCNBAmse04 => key is not dynamic 
      // so how to get dynamic key from movieId
      // 1st way is using useState
      // 2 nd way is using redux store
    <div className='w-screen absolute'> 
      <iframe 
     
       src={`https://www.youtube.com/embed/${trailerKey}?si=YGOAe3X2HWYm5uAc`}
       className='w-screen aspect-video'

        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
          >
     </iframe>
    </div>
  )
}

export default VideoBackground;