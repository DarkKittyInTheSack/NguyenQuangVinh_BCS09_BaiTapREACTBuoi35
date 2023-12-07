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
        quantity: '',
        seatList:[]
    },
    cinemaDataList:[],
    seatData: data
}

const ticketReducer = createSlice({
    name: 'ticket',
    initialState,
    reducers:{
        getData: (state,action) =>{
            console.log(state);
            console.log(action['payload'])
            state.userInformation = action.payload
        },

        setCinemaDataList:(state,action) =>{
            console.log(state);
            console.log(action['payload'])
            state.cinemaDataList.push(action.payload)
        }
    }
})


export const {getData,setCinemaDataList} = ticketReducer.actions
export default ticketReducer.reducer