import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import server from "../../server";

let initialState = {
    data: [],
    status: 'ideal',
    error: null
}

export const fetchSeries = createAsyncThunk('fetchseries', async (token) => {
    let resData = []
    const response = await axios.get(`${server}/getseries`, {
        headers: {
            Authorization: `${token}`,
        },
    })
        .then((res) => {
            resData = res.data.data
        })
    return resData
})


export const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSeries.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(fetchSeries.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'sucess'
        })
        builder.addCase(fetchSeries.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default seriesSlice.reducer