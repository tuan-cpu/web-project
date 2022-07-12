import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import movieApi from "../../common/api/movieApi";

const initialState = {
  user: {},
  isLogin: false,
  isLogging: false,
  isRegistering: false,
  isLogged: false,
};

export const postAsyncLogin = createAsyncThunk(
  "auth/postAsyncLogin",
  async ({ username, password }) => {
    const res = await movieApi.post("users/login", {
      username: username,
      password: password,
    });
    return res.data;
  }
);
export const postAsyncRegister = createAsyncThunk(
  "auth/postAsyncRegister",
  async ({ email, name, password }) => {
    const res = await movieApi.post("users/register", {
      email: email,
      name: name,
      password: password,
    });
    return res.data;
  }
);

export const postAsyncLogout = createAsyncThunk(
  "auth/postAsyncLogout",
  async ( token ) => {
    const res = await movieApi.post("users/logoutAll",{}, {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    });
    return res.status === 201;
  }
);

export const fetchAsyncAuth = createAsyncThunk(
  "auth/fetchAsyncAuth",
  async ( token ) => {
    const res = await movieApi.get("user", {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    });
    return res.status === 201;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [postAsyncLogin.pending]: (state) => {
      return { ...state, isLogging: true, isLogin: false };
    },
    [postAsyncLogin.fulfilled]: (state, { payload }) => {
      return { ...state, user: payload, isLogging: false, isLogin: true };
    },
    [postAsyncRegister.pending]: (state) => {
      return { ...state, isRegistering: true };
    },
    [postAsyncRegister.fulfilled]: (state) => {
      return { ...state, isRegistering: false };
    },
    [fetchAsyncAuth.fulfilled]: (state, { payload }) => {
      return { ...state, isLogged: payload };
    },
    [postAsyncLogout.fulfilled]:(state) =>{
      return {...state, isLogged: false};
    }
  },
});

export const { logout } = authSlice.actions;
export const getLoginCurrentState = (state) => state.auth.isLogging;
export const getLoginState = (state) => state.auth.isLogin;
export const getRegisterState = (state) => state.auth.isRegistering;
export const getLoggedState = (state) => state.auth.isLogged;
export const getUser = (state) => state.auth.user;
const authReducer = authSlice.reducer;
export default authReducer;
