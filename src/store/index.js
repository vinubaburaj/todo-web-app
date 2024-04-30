import {configureStore} from "@reduxjs/toolkit";
import navbarReducer from "../components/Navbar/navbarReducer";

const store = configureStore({
    reducer: {
        navbarReducer
    },
});

export default store; 