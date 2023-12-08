import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { useState } from "react";

const data = axios.get('./data/danhSachGhe.json').then((result) => {
    let arr = result.data
    return arr
}).catch((err) => {
    console.log(err);
});

const initialState = {
    userInformation:{
        name:'',
        seatList:[],
        priceList:[]
    },
    cinemaDataList:[],
    seatData: data
}

const ticketReducer = createSlice({
    name: 'ticket',
    initialState,
    reducers:{
        getData: (state,action) =>{
            state.userInformation = action.payload
        },

        setCinemaDataList:(state,action) =>{
            state.cinemaDataList.push(action.payload)
        }
    }
})


export const {getData,setCinemaDataList} = ticketReducer.actions
export default ticketReducer.reducer