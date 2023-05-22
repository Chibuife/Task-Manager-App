import { configureStore } from "@reduxjs/toolkit";
import modeSlce from "./modeSlice";


const store = configureStore({
    reducer: {
        mode: modeSlce.reducer
    }
});

export default store;