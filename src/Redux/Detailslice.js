

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todolist",
  initialState: {
    input: "",
    tasks: [],
    isEditing: false,
  },
  reducers: {
    setInput: function (state, action) {
      state.input = action.payload;
    },
    addTask: function (state, action) {

      const input = state.input.trim(); 

      if (input !== "") { 
        if (state.isEditing === false) {
          state.tasks = [...state.tasks, { name: input, priority: "None" }];
        } else {
          state.tasks[state.isEditing] =  { name: input, priority: "None" };
          state.isEditing = false;
        }
        state.input = "";
      }
    },
    updatePriority: function (state, action) {
      // Update the tasks array with the new priorities
      state.tasks = action.payload;
    },


    deleteTask: function (state, action) {
      state.tasks = state.tasks.filter((task, index) => {
        return index !== action.payload;
      });
    },
    editTask: function (state, action) {
      state.input = state.tasks[action.payload];
      state.isEditing = action.payload;
    },
    
    
  },
});
export const { setInput, addTask, deleteTask, editTask, updatePriority} = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export default todoReducer;