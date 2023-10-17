import { createSlice } from "@reduxjs/toolkit";
// create slice yap
// name
// initial state
// reducer tanimla
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isUserLogin: false,
    user: {},
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isUserLogin = true;
      state.isUserLogin = true;
      state.user = action.payload;
    },
    loginFailled: (state) => {
      state.isUserLogin = false;
      state.user = {};
    },
    logout: (state, action) => {
      state.isUserLogin = false;
      state.user = {};
    },
  },
});

export const { loginSuccess, loginFailled, logout } = authSlice.actions;
export default authSlice.reducer;
