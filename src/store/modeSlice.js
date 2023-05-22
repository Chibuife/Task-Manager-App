import { createSlice } from "@reduxjs/toolkit";

const modeSlce = createSlice({
    name: 'mode',
    initialState: [ {
        mode:true
    }],
    reducers: {
        switchMode(state, action){
           state.mode =  "a";
        // console.log(!state)
        },
    }
})

export const { switchMode } = modeSlce.actions;

export default modeSlce