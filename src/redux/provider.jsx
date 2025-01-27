"use client"

import { store } from "./store";
import { Provider, useDispatch } from "react-redux";
import React, { useEffect } from "react";

export function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}