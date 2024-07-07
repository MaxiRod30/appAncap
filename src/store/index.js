import { configureStore } from "@reduxjs/toolkit";
import titleNavReducer from "../fetures/TitleNav/TitleNavSlice";

export default configureStore({
    reducer: {
        title: titleNavReducer,
    }
})
