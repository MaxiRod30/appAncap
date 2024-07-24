import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: "info", 
    initialState: {
        value: {
            alarmSelected: "",
        }
    }, 
    reducers: {
        setAlarmSelected: (state, action)=>{
            state.value.alarmSelected = action.payload;
        },

    }
})

export const {setAlarmSelected} = infoSlice.actions
export default infoSlice.reducer;
