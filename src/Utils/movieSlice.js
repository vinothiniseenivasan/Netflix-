import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name :"movies" ,
    initialState:{
        nowPlayingMovies : null ,
        getTrailerKey    : null
    } ,
    
    reducers:{
        addNowPlayingMovies : (state , action) =>{
            state.nowPlayingMovies = action.payload
        } ,
        addGetTrailerKey : (state , action) =>{
            state.getTrailerKey = action.payload
        }

    }
})

export const {addNowPlayingMovies ,addGetTrailerKey} = movieSlice.actions;

export default movieSlice.reducer;