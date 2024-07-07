import { createSlice } from "@reduxjs/toolkit";

export const titleNavSlice = createSlice({
    name: "titleNav", 
    initialState: {
        value: {
            titleSelected: ""
        }
    }, 
    reducers: {
        setTitleSelected: (state, action)=>{
            state.value.titleSelected = action.payload;
        }
    }
})

export const {setTitleSelected} = titleNavSlice.actions
export default titleNavSlice.reducer;
