import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const langSlice = createSlice({

    name : "lang" , 
    initialState :
    {
       default : "English"
    }  ,
    reducers : {
        changeLanguage : (state ,action) =>{
            state.default = action.payload;
        }
    }
  

})
 


export default langSlice.reducer;

export const {changeLanguage} = langSlice.actions;