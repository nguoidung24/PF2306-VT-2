import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const userInfoSlice = createSlice({
    name: "user",
    initialState: {
        status: "idle",
        userInfo: []
    },
    reducers:{},
    extraReducers : (builder) => {
        builder
            .addCase(fetchUserThunkAction.pending, (state, action)=>{
                state.status = "loadding";
            })
            .addCase(fetchUserThunkAction.fulfilled, (state, action)=>{
                state.status = "idle";
                state.userInfo = action.payload
            })
    }
})
export const fetchUserThunkAction = createAsyncThunk("",
    async () => {
        let data = await axios.get("https://jsonplaceholder.typicode.com/users");
        return data.data;
    }
)
export default userInfoSlice;