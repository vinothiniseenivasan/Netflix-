import React from 'react';
import { useEffect } from "react";
import { options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addGetThirllerMovies } from "../Utils/movieSlice";


const useThirllerMovies = () => {
    const dispatch = useDispatch();


    async function getThirllerMovies()
    {
      
      const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
       const jsonInfo = await data.json();

    //    console.log("jsonInfo in popular" ,jsonInfo.results);

        // store our movie api information to Redux store by using dispatch
       dispatch( addGetThirllerMovies(jsonInfo.results));

    }


    useEffect(() =>{

        getThirllerMovies();
    
    } , [])

}

export default useThirllerMovies