import { createSlice } from "@reduxjs/toolkit";

const modeSlce = createSlice({
    name: 'mode',
    initialState: [ {
        mode:true
    }],
    reducers: {
        switchMode(state, action){
           state.mode =  false

        },
    }
})

export const { switchMode } = modeSlce.actions;

export default modeSlce