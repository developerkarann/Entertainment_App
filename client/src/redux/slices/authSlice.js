import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import server from '../../server';

const tokenFromStorage = localStorage.getItem('token');

export const loginUser = createAsyncThunk('auth/loginuser', async ({ email, password }, thunkAPI) => {
    try {
        const response = await axios.post(`${server}/login`, { email, password })
        let { token, user } = await response.data
        localStorage.setItem('token', token)
        return { token, user }
    } catch (err) {
        const message = err.response?.data?.message || 'Login failed. Please try again.';
        return thunkAPI.rejectWithValue(message);
    }
})

export const registerUser = createAsyncThunk('auth/registeruser', async ({ email, password }, thunkAPI) => {
    try {
        const response = await axios.post(`${server}/createuser`, { email, password })
        const { sucess, message, user } = response.data
        return sucess
    } catch (err) {
        const message = err.response?.data?.message || 'Login failed. Please try again.';
        return thunkAPI.rejectWithValue(message);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: tokenFromStorage || null,
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        setCredentials: (state, action) => {
            const { token, user } = action.payload;
            state.token = token;
            state.user = user || null;
            localStorage.setItem('token', token)
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user || null
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.token = null;
            state.user = null;
            state.error = action.payload
        })
    }
})


export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer