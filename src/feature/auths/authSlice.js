import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";


const initialState = {
    user: {},
    isLogin: false,
    isLogging: false,
}

export const fetchAsyncLogin = createAsyncThunk();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state)=>{
            state.user = {};
        }
    },
    extraReducers:{
        [fetchAsyncLogin.pending]: (state) =>{
            return {...state,isLogging:true}
        },
        [fetchAsyncLogin.fulfilled]: (state,{payload})=>{
            return {...state,user:payload,isLogging:false,isLogin:true}
        },
        [fetchAsyncLogin.rejected]:(state) =>{
            console.log('Rejected')
        }
    }
})

export const {logout} = authSlice.actions;
export const getLoginCurrentState = (state) => state.auth.isLogging;
export const getLoginState = (state) => state.auth.isLogin;
export const getUser = (state) => state.auth.user;
const authReducer = authSlice.reducer;
export default authReducer;