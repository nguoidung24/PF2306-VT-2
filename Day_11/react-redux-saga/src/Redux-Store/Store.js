import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "../Redux-Slice/UserSlice";

const store = configureStore({
    reducer:{
        userReducer: userInfoSlice.reducer
    }
});
export default store;