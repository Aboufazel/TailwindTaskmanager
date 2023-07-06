import {createSlice} from "@reduxjs/toolkit";



const addTask = (state , action) =>{
   state.push(action.payload)
}



const initialState = [{id:1 , title:"my first task"}]


const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        addTask,
    }
})





export const {addTask:addTaskAction} = categorySlice.actions;



export default categorySlice.reducer;