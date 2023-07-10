import {createSlice} from "@reduxjs/toolkit";






const initialState = []

// const createAlert = (state , action) =>{
//     console.log(`state-alerts ${state.alerts}`)
//
//     state.alerts.push({
//         message: action.payload.message,
//         type: action.payload.type
//     });
// }

const toastSlice =  createSlice({
    name:"toastMange",
    initialState,
    reducers: {
        createAlert: (state, action) => {
            state={message:action.payload.message};
        }
    }
})




export const {createAlert:alertAction} = toastSlice.actions;
export default toastSlice.reducer;