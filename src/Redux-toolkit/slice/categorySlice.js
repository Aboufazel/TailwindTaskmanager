import {createSlice} from "@reduxjs/toolkit";


const addTask = (state, action) => {
    state.push(action.payload)
}


const deleteTask = (state, action) => {

    const selectTask = state.findIndex(item => item.id === action.payload)
    state.splice(selectTask, 1)
}


const editTask = (state, action) => {
    const index = state.findIndex(item => item.id === action.payload.id)
    state[index] = action.payload;
}


const initialState = [{id: 1, title: "my first task"}]


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addTask,
        deleteTask,
        editTask,
    }
})


export const {
    addTask: addTaskAction,
    deleteTask: deleteTaskAction,
    editTask:editTaskAction,
} = categorySlice.actions;


export default categorySlice.reducer;