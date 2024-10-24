import { createSlice } from "@reduxjs/toolkit";

const movieTrailerSlice =createSlice({
    name : "movieTrailer" ,
    initialState : {
        showMovieTrailer:false,
        id : null ,
        overview : null ,
        title : null

    } ,
    reducers :{
        // toggle showGptSearch
        toggleMovieTrailer :  (state ,action) =>{
            state.showMovieTrailer =!state.showMovieTrailer
        }, 
        addMovieTrailerId: (state ,action) =>{
            state.id =action.payload
        } ,
        addMovieOverview: (state ,action) =>{
            state.overview =action.payload
        },
        addMovieTitle: (state ,action) =>{
            state.title =action.payload
        }
    }
});

export default movieTrailerSlice.reducer;

export const {toggleMovieTrailer , addMovieTrailerId,addMovieOverview,addMovieTitle} = movieTrailerSlice.actions;

