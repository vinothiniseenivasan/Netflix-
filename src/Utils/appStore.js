import userSliceReducer from "./userSlice"


import { configureStore } from "@reduxjs/toolkit";

const appStore  =  configureStore (
    {
        reducer : {
            // provide userSlice Reducer into appStore
           user : userSliceReducer,
        }
    }
)

export default appStore;