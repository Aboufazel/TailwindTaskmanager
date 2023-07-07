import {createSlice} from "@reduxjs/toolkit";






const initialState = {message:"" , type:""}


const createAlert = (state , action) =>{

    alert(action.payload.message)
    // state.message = action.payload.message;
    // state.type = action.payload.type;
}

const toastSlice =  createSlice({
    name:"toastMange",
    initialState,
    reducers: {
        createAlert
    }
})




export const {createAlert:alertAction} = toastSlice.actions;
export default toastSlice.reducer;