import React, { useRef, useState } from 'react';
import { TMDB_CDN_URL } from '../Utils/constant';
import { poster_image } from '../Utils/varietyposters';

const MovieCard = ({posterPath}) => {
  const ind = useRef(0);

  const [isEnlarge , setIsEnlarge] = useState(false)

  // console.log("ind.current" ,ind.current)

  if (!posterPath) {
    // if(ind?.current <= 5)
    // {
    //   ind.current += 1; 
    // }
    // else
    // {
    //   ind.current =1;
    // }

   // Increment the reference value correctly
    return (
      <div className='w-[15rem] h-[15rem]'>
        <img src={poster_image[3].img} alt="moviecard_img" />
      </div>
    );
  }

    // console.log("posterPath" ,posterPath)
  return (
    <div className={ `transition-all duration-300 ${isEnlarge ? 'w-[25rem] h-[25rem]' : 'w-[15rem] h-[15rem]'}`}
    onClick={()=>{setIsEnlarge(!isEnlarge)}}
    >
       <img src={TMDB_CDN_URL+posterPath} alt="moviecard_img" />
    </div>
  )
}

export default MovieCard