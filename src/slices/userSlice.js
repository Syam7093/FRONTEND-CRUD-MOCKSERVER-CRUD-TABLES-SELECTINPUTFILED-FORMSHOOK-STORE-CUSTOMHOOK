import { createSlice } from "@reduxjs/toolkit";



const initialState={
    number:0
}

export const userSlice=createSlice({
      name:"store",
      initialState,
      reducers:{
        setNumber:(state,action)=>{
           state.number=action.payload
        }
      }
})

export const {setNumber}=userSlice.actions