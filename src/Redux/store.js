import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Detailslice";
import  CardSlice  from "./CardSlice";


const store = configureStore({
    reducer: {
        todo: todoReducer,
        List:CardSlice 
    }
})
export default store;



