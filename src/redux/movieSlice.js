import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    error: null,
  },
  reducers: {
    fetchMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.error = null;
    },
    fetchMoviesFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesSuccess, fetchMoviesFailure } = movieSlice.actions;
export default movieSlice.reducer;
