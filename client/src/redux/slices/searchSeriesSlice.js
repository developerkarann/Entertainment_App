import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import server from "../../server"


let initialState = {
    series: [],
    status: 'ideal',
    error: null
}


export const searchSeries = createAsyncThunk('searchSeries', async ({id,token}) => {
    let series = []
    const response = await axios.get(`${server}/series/${id}`, {
        headers: {
            Authorization: `${token}`,
        },
    })
        .then((res) => {
            series = res.data.data
        })
    return series
})


export const searchSeriesSlice = createSlice({
    name: 'searchSeries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchSeries.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(searchSeries.fulfilled, (state, action) => {
            state.series = action.payload,
                state.status = 'sucess'
        })
        builder.addCase(searchSeries.rejected, (state) => {
            state.status = 'failed'
        })
    }
})


export default searchSeriesSlice.reducer