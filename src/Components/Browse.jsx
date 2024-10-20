
// import { useSearchParams } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopMovies from "../hooks/usePopMovies";
import useThirllerMovies from "../hooks/useThirllerMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
// import { toggleGptSearchView } from "../Utils/gptSlice";
import GptSearchComponent from "./GptSearchComponent";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () =>{

    useNowPlayingMovies();
    usePopMovies();
    useTrendingMovies();
    useThirllerMovies();


    // we already add in reducer toggleGptSearchView regarding to that we are showing component
    //  toggleGptSearchView === true means GptSearchComponent
    // toggleGptSearchView === false means  Main and Secondary container


    // useSelector
    const showGpt = useSelector((store) => store.gpt.showGptSearch);
    console.log("showGptSearch" ,showGpt)

    
    



    return(
        <div className="">
             <Header />

            {
            showGpt ? (<GptSearchComponent />) :
                                  ( <>
                                   <MainContainer />
                                   <SecondaryContainer />
                                   </>)
            }
       </div>

    )
}
    

export default Browse;
