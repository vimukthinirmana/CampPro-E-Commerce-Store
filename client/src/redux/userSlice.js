import { createSlice } from "@reduxjs/toolkit";
import Login from "../pages/Login";

const initialState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        loginRedux : (state, action) =>{
            console.log(action);
        }
    }


})

export const { loginRedux } = userSlice.actions;

export default userSlice.reducer;