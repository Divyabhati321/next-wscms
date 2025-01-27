import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onOpen: false,
  redirectUrl: '',
};

const loginPopupSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    setLoginState(state, action) {
      state.onOpen = action.payload.status;
      state.redirectUrl = action.payload.redirectUrl;
    },
  },
});

export const { setLoginState } = loginPopupSlice.actions;
export default loginPopupSlice.reducer;