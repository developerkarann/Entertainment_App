import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import server from '../../server'
import axios from 'axios'

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fetchBookmarks = createAsyncThunk('fetch/bookmarks', async (token) => {
    let data = []
    if (!token) {
        return console.log('[Error]: Token is undefined')
    }
    const response = await axios.get(`${server}/bookmarks`, {
        headers: {
            Authorization: `${token}`,
        },
    }).then((res) => {
        data = res.data.bookmarks
    }).catch((err) => {
        console.log('Bookmark erro:', err.message)
    })

    return data
})


export const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBookmarks.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchBookmarks.fulfilled, (state, action) => {
            state.data = action.payload,
                state.status = 'sucess'
        })
        builder.addCase(fetchBookmarks.rejected, (state) => {
            state.status = 'failed'
        })
    }
})


export default bookmarksSlice.reducer