import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onOpen: false,
};

const bookSessionSlice = createSlice({
  name: "bookSessionState",
  initialState,
  reducers: {
    setBookState(state, action) {
      state.onOpen = action.payload.status;
    },
  },
});

export const { setBookState } = bookSessionSlice.actions;
export default bookSessionSlice.reducer;
