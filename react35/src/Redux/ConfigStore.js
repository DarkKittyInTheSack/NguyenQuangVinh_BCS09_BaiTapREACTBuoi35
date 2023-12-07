import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./reducer/ticketReducer";

export const store = configureStore({
    reducer:{
        ticketReducer
    }
})