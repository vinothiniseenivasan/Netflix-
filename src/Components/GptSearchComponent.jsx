import React from 'react';
import GptSearchBar from './GptSearchBar';
import { NETFLIX_BACKGROUND_IMAGE } from '../Utils/constant';
import Header from './Header';

const GptSearchComponent = () => {
  return (
   
    <div>
     

      {/* netflix background image */}
      <div className="h-full fixed   top-0 left-0 w-full ">
        {/* Background image */}
        <img
          className="h-full w-full object-cove opacity-55r"
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="Logo"
        />
      </div>
       {/* 1.gptSearch bar */}
       {/* 2 .gptMovie Suggesstion */}
       <GptSearchBar />
    </div>
  )
}

export default GptSearchComponent