import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";
import  CardSlice  from "./CardSlice";


const store = configureStore({
    reducer: {
        todo: todoReducer,
        card:CardSlice 
    }
})
export default store;

