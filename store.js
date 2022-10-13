import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import carReducer from "./slices/carSlice";
import brandReducer from "./slices/brandSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        car: carReducer,
        brand: brandReducer,
    },
});
