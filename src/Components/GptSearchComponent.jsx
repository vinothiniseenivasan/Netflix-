import React from 'react';
import GptSearchBar from './GptSearchBar';
import { NETFLIX_BACKGROUND_IMAGE } from '../Utils/constant';
import GptMovieRecommendation from './GptMovieRecommendation';
// import Header from './Header';

const GptSearchComponent = () => {
  return (
   
    <div className=''>
     

      {/* netflix background image */}
      <div className="h-full fixed   top-0 left-0 w-full  ">
        {/* Background image */}"
        <img
          className="h-full w-full object-cover opacity-55r"
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="Logo"
        />
      </div>

      <div className=' pt-[30%] md:pt-0'>
      <GptSearchBar />       
      <GptMovieRecommendation className="bg-black "/>
      </div>
       {/* 1.gptSearch bar */}
       {/* 2 .gptMovie Suggesstion */}
     

    </div>
  )
}

export default GptSearchComponent