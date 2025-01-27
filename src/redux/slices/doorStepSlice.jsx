import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onOpen: false,
};

const doorStepSlice = createSlice({
  name: "doorStepState",
  initialState,
  reducers: {
    setdoorStepState(state, action) {
      state.onOpen = action.payload.status;
    },
  },
});

export const { setdoorStepState } = doorStepSlice.actions;
export default doorStepSlice.reducer;
