import { createSlice } from "@reduxjs/toolkit";

const initialState={
    onOpen : false,
};

const ClaimpopupSlice = createSlice({
    name:'claimsessionState',
    initialState,
    reducers:{
        setClaimState(state,action){
            state.onOpen= action.payload.status;
        },
    },
});

export const { setClaimState } = ClaimpopupSlice.actions;
export default ClaimpopupSlice.reducer;