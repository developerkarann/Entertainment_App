import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './slices/moviesslice'
import seriesSlice from './slices/seriesSlice'
import searchMovieSlice from './slices/searchMovieSlice'
import searchSeriesSlice from './slices/searchSeriesSlice'
import bookmarkSlice from './slices/bookmarkSlice'
import authSlice from './slices/authSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        series: seriesSlice,
        searchedMovie: searchMovieSlice,
        searchedSeries: searchSeriesSlice,
        bookmarks: bookmarkSlice,
        auth: authSlice
    },
    devTools: true
})