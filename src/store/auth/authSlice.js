import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // "checking", "authenticated"
    uid: null, //valor inicial cuando no hay usuario
    email: null, //valor inicial cuando no hay usuario
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {
      //
    },
    logout: (state, payload) => {
      //
    },
    checkingCredentials: (state) => {
      //
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
