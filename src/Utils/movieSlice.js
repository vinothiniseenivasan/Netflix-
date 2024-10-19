import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name :"movies" ,
    initialState:{
        nowPlayingMovies : null ,
        getTrailerKey    : null ,
        getPopularMovies : null ,
        getTrendingMovies : null ,
        getThirllerMovies : null
    } ,
    
    reducers:{
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload
        } ,
        addGetTrailerKey : (state , action) =>{
            state.getTrailerKey = action.payload
        } ,
       addGetPopularMovies  : (state , action) =>{
        state.getPopularMovies = action.payload
    } ,
    addGetTrendingMovies  : (state , action) =>{
        state.getTrendingMovies= action.payload
    } ,
    addGetThirllerMovies  : (state , action) =>{
        state.getThirllerMovies= action.payload
    } 


    }
})

export const {addNowPlayingMovies ,addGetTrailerKey , addGetPopularMovies,addGetTrendingMovies ,addGetThirllerMovies} = movieSlice.actions;

export default movieSlice.reducer;