import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import server from "../../server";

const initialState = {
    data: [],
    status: 'idle',
    error: null
}


export const fetchMovies = createAsyncThunk('fetchmovies', async (token) => {
    let resData = []
    // console.log(token)
    if(!token){
        return console.log('[Error]: Token is undefined')
    }
    const response = await axios.get(`${server}/getmovies`, {
        headers: {
            Authorization: `${token}`,
        },
    })
        .then((res) => {
            resData = res.data.data
        })
    return resData
})


export const moviesSlice = createSlice({
    name: 'moviesData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.data = action.payload,
                state.status = 'sucess'
        })
        builder.addCase(fetchMovies.rejected, (state) => {
            state.status = 'failed'
        })
    }
})


export default moviesSlice.reducer