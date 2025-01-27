import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/redux/slices/sidebarSlice";
import authReducer from "./slices/authSlice";
import loginPopupReducer from "./slices/loginPopupSlice";
import bookSessionReducer from "./slices/bookSessionSlice";
// import claimpopupReducer from '@/redux/slices/ClaimpopupSlice';
import doorStepReducer from '@/redux/slices/doorStepSlice'
export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        auth: authReducer,
        loginPopup: loginPopupReducer,
        bookSessionState: bookSessionReducer,
        // claimsessionState: claimpopupReducer,
        doorStepState: doorStepReducer
    }
});
