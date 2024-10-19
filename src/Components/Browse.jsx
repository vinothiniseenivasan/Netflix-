
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopMovies from "../hooks/usePopMovies";
import useThirllerMovies from "../hooks/useThirllerMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
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
        {/* Browse */}
       </div>

    )
}
    

export default Browse;
