import React, { useRef, useState } from 'react';
import { TMDB_CDN_URL } from '../Utils/constant';
import { poster_image } from '../Utils/varietyposters';
// import useMovieTrailer from '../hooks/useMovieTrailer';
import { useDispatch, useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import { toggleMovieTrailer } from '../Utils/movieTrailerSlice';
// import addMovieTrailerId '../Utils/movieTrailer'
import { addMovieTrailerId } from '../Utils/movieTrailerSlice';
import { addMovieTitle } from '../Utils/movieTrailerSlice';
import { addMovieOverview } from '../Utils/movieTrailerSlice';
import { useNavigate } from 'react-router-dom';
// import showGptSearch from '../Utils/gptSlice';

const MovieCard = ({posterPath , movieId ,overview ,original_title }) => {
  // const ind = useRef(0);

  

  const [isEnlarge , setIsEnlarge] = useState(false);
  // const showGpt = useSelector((store) => store.gpt.showGptSearch);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("ind.current" ,ind.current)

  function handleCard(event)
  {
    // event.stopPropagation(); // Prevent event bubbling
    setIsEnlarge(true);
    
    dispatch(toggleMovieTrailer());
    dispatch(addMovieTrailerId(movieId));
    dispatch(addMovieTitle(original_title));
    dispatch(addMovieOverview(overview))
    console.log("Navigating to /MovieInfo");

    
    
  }

  if (!posterPath) {
   

  // default poster image
    return (
      <div className= ' w-11rem  md:w-[15rem]  h-[15rem]'>
        <img src={poster_image[3].img} alt="moviecard_img" />
      </div>
    );
  }



  // w-[13rem] md:w-[15rem]
     return ( <div className= "  w-[13rem] md:w-[15rem] h-[15rem]  flex-shrink-0 "
    onClick={ (event)=>{handleCard(event)} }
    >
      {/* images of serach gpt movies */}
       <img
       className='w-[400px] h-[450px] object-cover hover:w-[800px] hover:h-[800px] hover:object-cover'
        src={TMDB_CDN_URL+posterPath} alt="moviecard_img" />

    </div>)



   
  
}

export default MovieCard