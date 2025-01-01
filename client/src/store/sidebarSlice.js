import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState:{
        isMobileSidebarOpen: false,
    },
    reducers:{
        openSidebar(state){
            state.isMobileSidebarOpen = !state.isMobileSidebarOpen
        },

        closeSidebar(state){
            state.isMobileSidebarOpen = false
        }
    }
})

export const {openSidebar, closeSidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer;