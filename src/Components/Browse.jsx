
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{

   useNowPlayingMovies();
    return(
        <div className="text-white ">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        Browse
       </div>

    )
}
    

export default Browse;
