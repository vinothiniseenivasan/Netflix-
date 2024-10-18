import React from 'react'
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    // now we want video data
    // dispatch an action already done in redux store to get movie info.
    //  how => by useSelector from redux store
    const movies = useSelector(store => store?.movies?.nowPlayingMovies);

    // if movies null means return
    // intialreturn
    if(movies === null)
    {
      return;
    }
    const oneMovie = movies[0];
    console.log("oneMovie" , oneMovie);
     
    // title and description of movie
    const {original_title ,overview , id }  = oneMovie;
  
  return (
    <div>
        {/* MainContainer */}
        {/* 2 => movie Trailer and Movie Title */}
        <VideoTitle    title = {original_title}    overview = {overview}  />

        <VideoBackground    movieId = {id}  />
        </div>
  )
}

export default MainContainer