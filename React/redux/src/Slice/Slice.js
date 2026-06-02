// npm i @reduxjs/toolkit 
// npm i react-redux

import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:"Addcount",
    initialState:{count:0, bg:"dark"},
    reducers:{
        addCount:(state,action)=>{state.count+=action.payload},
        minusCount:(state,action)=>{state.count-=action.payload},
        bgChange:(state,action)=>{state.bg=state.bg==="dark"?action.payload:"dark"}
    }
})

export const{addCount,minusCount,bgChange} = countSlice.actions