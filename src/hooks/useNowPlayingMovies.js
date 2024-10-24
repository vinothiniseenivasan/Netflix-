import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";


const useNowPlayingMovies= () =>{
    const dispatch = useDispatch();

    const popMovies = useSelector((store) => store.movies.nowPlayingMovies);


    async function getNowPlayingMovies()
    {
        // fetch data from tmdb api
        // TMDB_API_OPTIONS we save in constant.js from api reference of tmdb
       const data = await  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_OPTIONS);

       const jsonInfo = await data.json();

    //    console.log("jsonInfo" ,jsonInfo.results);
        // store our movie api information to Redux store by using dispatch
       dispatch(addNowPlayingMovies(jsonInfo.results));


    }


    useEffect(() =>{
        // if already not present  then call

         !popMovies && getNowPlayingMovies();
    
    } , [])



}

export default useNowPlayingMovies;