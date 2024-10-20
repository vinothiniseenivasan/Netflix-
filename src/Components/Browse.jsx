
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopMovies from "../hooks/usePopMovies";
import useThirllerMovies from "../hooks/useThirllerMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GptSearchComponent from "./GptSearchComponent";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{

    useNowPlayingMovies();
    usePopMovies();
    useTrendingMovies();
    useThirllerMovies();
    return(
        <div className="">
            <Header />
            <MainContainer />
            <SecondaryContainer />
            <GptSearchComponent /> 
        {/* Browse */}
       </div>

    )
}
    

export default Browse;
