import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: "info", 
    initialState: {
        value: {
            alarm: "",
            user:"",
            horario:"",
        }
    }, 
    reducers: {
        setAlarmSelected: (state, action)=>{
            state.value.alarm = action.payload;
            state.value.user = action.payload;
            state.value.horario = action.payload;
        },

    }
})

export const {setAlarmSelected} = infoSlice.actions
export default infoSlice.reducer;
