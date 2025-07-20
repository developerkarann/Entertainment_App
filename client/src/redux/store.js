import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './slices/moviesslice'
import seriesSlice from './slices/seriesSlice'
import searchMovieSlice from './slices/searchMovieSlice'
import searchSeriesSlice from './slices/searchSeriesSlice'
import authSlice from './slices/authSlice'
import  bookmarksSlice from './slices/bookmarksSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        series: seriesSlice,
        searchedMovie: searchMovieSlice,
        searchedSeries: searchSeriesSlice,
        bookmarks: bookmarksSlice,
        auth: authSlice
    },
    devTools: true
})