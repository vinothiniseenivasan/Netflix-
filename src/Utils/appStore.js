import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice.js";
import gptSliceReducer from "./gptSlice.js";
import langSliceReducer from "./langSlice.js";
import movieTrailerReducer from "./movieTrailerSlice.js";



import { configureStore } from "@reduxjs/toolkit";

const appStore  =  configureStore (
    {
        reducer : {
            // provide userSlice Reducer into appStore
           user : userSliceReducer,

            // provide moviesSlice Reducer into appStore
            movies : movieSliceReducer , 

             // provide gptSlice Reducer into appStore
             gpt : gptSliceReducer ,

             // provide langSlice Reducer into appStore
             lang : langSliceReducer,

             // provide movieTrailer Reducer into appStore
            movieTrailer: movieTrailerReducer




        }
    }
)

export default appStore;