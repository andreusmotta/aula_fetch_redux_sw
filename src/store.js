//redux
import { configureStore } from "@reduxjs/toolkit";

//reducers
import GetReducer from "./api/slices/PlanetasSlice";

export const store = configureStore({
    reducer: {
        get: GetReducer
    }
});