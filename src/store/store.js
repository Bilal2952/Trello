import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { trelloSlice } from "./slices/trelloSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    trello: trelloSlice.reducer,
  },
});
