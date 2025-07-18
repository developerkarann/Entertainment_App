import { createSlice } from "@reduxjs/toolkit";

const loadInitialBookmark = () => {
    const saved = localStorage.getItem('bookmarks')
    return saved ? JSON.parse(saved) : []
};


export const bookmarkSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        items: loadInitialBookmark()
    },
    reducers: {
        toggleBookmark: (state, action) => {
            const movie = action.payload
            const index = state.items.findIndex(item => item.id === movie.id)

            if (index >= 0) {
                //remove 
                state.items.splice(index, 1)
            } else {
                state.items.push(movie)
            }

            // Update local storage

            localStorage.setItem('bookmarks', JSON.stringify(state.items))
        },
        clearBookmark: (state) => {
            state.items = [];
            localStorage.removeItem('bookmarks')
        }
    }
})

export const { toggleBookmark, clearBookmark } = bookmarkSlice.actions
export default bookmarkSlice.reducer