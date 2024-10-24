import React from 'react';
import { useEffect } from "react";
import { options, TMDB_API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addGetTrendingMovies } from "../Utils/movieSlice";
import { useSelector } from 'react-redux';

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const trendingMovies = useSelector((store) => store.movies.getTrendingMovies);


    async function getTrendingMovies()
    {
        // fetch data from tmdb api
        // TMDB_API_OPTIONS we save in constant.js from api reference of tmdb
    //    const data = await  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_API_OPTIONS);
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
       const jsonInfo = await data.json();

    //    console.log("jsonInfo in popular" ,jsonInfo.results);
        // store our movie api information to Redux store by using dispatch
       dispatch( addGetTrendingMovies(jsonInfo.results));

    }


    useEffect(() =>{

       !trendingMovies && getTrendingMovies();
    
    } , [])

}

export default useTrendingMovies;