import { configureStore } from "@reduxjs/toolkit";
import { authSlice, uiSlice, calendarSlice } from "./";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})