import { createSlice } from "@reduxjs/toolkit";

const initialState={
    profile:{},
    isAuthenticated : false,
}

const authSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        userLogin: (state, action) => {
            state.profile = action.payload
            state.isAuthenticated = true

        },
        userLogout: (state, action) => {

            state.profile = {}
            state.isAuthenticated = false

        },
    },
    extraReducers:{

    }
})

export const {userLogin,userLogout}=authSlice.actions
export default authSlice.reducer;
