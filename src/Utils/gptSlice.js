import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name : "gpt" ,
    initialState : {
        showGptSearch : false,
        gptMovies : null,
        movieSuggestion : null
    } ,
    reducers :{
        // toggle showGptSearch
        toggleGptSearchView : (state ,action) =>{
            state.showGptSearch =!state.showGptSearch
        }, 
        addGptMovieResults: (state ,action) =>{
            state.gptMovies  = action.payload;
        } ,
        addGptMovieSuggestions: (state ,action) =>{
            state.movieSuggestion  = action.payload;
        } ,
    }
});



export const {toggleGptSearchView , addGptMovieResults,addGptMovieSuggestions} = gptSlice.actions;

export default gptSlice.reducer;