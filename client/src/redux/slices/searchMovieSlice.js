import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import server from "../../server"


let initialState = {
    movie: [],
    status: 'ideal',
    error: null
}


export const searchMovie = createAsyncThunk('serachmovie', async ({id, token}) => {
    let movie = []
    const response = await axios.get(`${server}/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => {
            movie = res.data.data
        })
    return movie
})


export const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchMovie.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(searchMovie.fulfilled, (state, action) => {
            state.movie = action.payload,
                state.status = 'sucess'
        })
        builder.addCase(searchMovie.rejected, (state) => {
            state.status = 'failed'
        })
    }
})


export default searchMovieSlice.reducer