import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice.js";


import { configureStore } from "@reduxjs/toolkit";

const appStore  =  configureStore (
    {
        reducer : {
            // provide userSlice Reducer into appStore
           user : userSliceReducer,

            // provide moviesSlice Reducer into appStore
            movies : movieSliceReducer ,

        }
    }
)

export default appStore;