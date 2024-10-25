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
   

   // Increment the reference value correctly
    return (
      <div className='w-[15rem] h-[15rem]'>
        <img src={poster_image[3].img} alt="moviecard_img" />
      </div>
    );
  }

  return (
    <div>

    
    <div className={ `transition-all duration-300 ${isEnlarge ? 'w-[25rem] h-[25rem]' : 'w-[15rem] h-[15rem]'}`}
    onClick={(event)=>{handleCard(event)}}
    >
       <img src={TMDB_CDN_URL+posterPath} alt="moviecard_img" />

    </div>



    {/* {(isEnlarge ? <VideoBackground movieId={movieId} /> : " ")} */}
    </div>
  )
}

export default MovieCard