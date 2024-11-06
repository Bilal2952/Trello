import { createSlice } from "@reduxjs/toolkit";
import { signInRequest, signUpRequest } from "../thunk/authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: null,
    isLoading: false,
    token: null,
    isError: null,
  },
  reducers: {
    isAuth: (state, action) => {
      state.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.role = action.payload.data.role;
      })
      .addCase(signUpRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(signInRequest.fulfilled, (state, action) => {
        state.role = action.payload.data.role;
      });
  },
});
export const { isAuth } = authSlice.actions;
