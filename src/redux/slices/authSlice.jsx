import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  isLoaded: false,
  isAuthenticated:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state, action) {
      return initialState;
    },
    setAuthData(state, action) {
      state.userData = action.payload;
      state.isLoaded = true;
      state.isAuthenticated = true;
    },
  },
});

export const { setAuthData, logOut } = authSlice.actions;
export default authSlice.reducer;
