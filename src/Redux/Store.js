import { configureStore } from "@reduxjs/toolkit";
import Todo from './TodoSlice'

export const Store = configureStore({
    reducer:{
      Todo
    }
})