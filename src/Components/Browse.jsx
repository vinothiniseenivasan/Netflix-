
// import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopMovies from "../hooks/usePopMovies";
import useThirllerMovies from "../hooks/useThirllerMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
// import { toggleGptSearchView } from "../Utils/gptSlice";
import GptSearchComponent from "./GptSearchComponent";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieCardInformation from "./MovieCardInformation";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Browse = () =>{

    useNowPlayingMovies();
    usePopMovies();
    useTrendingMovies();
    useThirllerMovies();

    const [intial ,setIntial] = useState(false);


    // we already add in reducer toggleGptSearchView regarding to that we are showing component
    //  toggleGptSearchView === true means GptSearchComponent
    // toggleGptSearchView === false means  Main and Secondary container


    // useSelector
    const showGpt = useSelector((store) => store.gpt.showGptSearch);
    // console.log("showGptSearch" ,showGpt)
    const showMovieTrailer = useSelector((store) => store.movieTrailer.showMovieTrailer);

   

    return(
     
    // header is common
    //  showMovieTrailer means show each trailer video in  MovieCardInformation
    // otherwise go to browse page and gpt page
      <div>
          
          <Header />

         {
           (showMovieTrailer ) ? <MovieCardInformation /> :
          (showGpt) ? (<GptSearchComponent />) :
                                      ( <>
                                       <MainContainer />
                                       <SecondaryContainer />
                                       </>)
         }

       

     
      </div>

    )
}
    
                

export default Browse;
