import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbarOpen: true,
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        toggleNavbar(state) {
            state.navbarOpen = !state.navbarOpen;
            // console.log("Navbar state changed to: ", state.navbarOpen);
        }
    },
});

export const {toggleNavbar} = navbarSlice.actions;
export default navbarSlice.reducer;