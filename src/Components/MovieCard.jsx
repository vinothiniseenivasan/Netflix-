import React from 'react';
import { TMDB_CDN_URL } from '../Utils/constant';

const MovieCard = ({posterPath}) => {

    // console.log("posterPath" ,posterPath)
  return (
    <div className='w-[15rem] h-[15rem]'>
       <img src={TMDB_CDN_URL+posterPath} alt="moviecard_img" />
    </div>
  )
}

export default MovieCard