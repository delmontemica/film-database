import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Movie, Movies } from 'types';
import { fetchMoviesByID, fetchMoviesBySearch } from 'api/movie';

type MovieState = {
    movies: Movies[],
    selectedMovie: Movie,
    message?: string,
    loading: boolean,
    success: boolean | null
}

/**
 * GET Movies based on given keywords.
 *
 */
export const getMoviesBySearch = createAsyncThunk(
    '/search',
    async(keyword: string, { dispatch, rejectWithValue }) => {
        try {
            let response = await fetchMoviesBySearch(keyword);

            if (response.data.Response === 'True') {
                dispatch(setMoviesList(response.data));
                return response.data;
            }

        } catch (error: Error | any) {
            return rejectWithValue(error.response.status);
        }
    }
)

/**
 * GET Movie based on specified ID.
 *
 */
export const getMoviesByID = createAsyncThunk(
    '/search/movie',
    async(id: string, { dispatch, rejectWithValue }) => {
        try {
            let response = await fetchMoviesByID(id);
            console.log(response);

            if (response.data.Response === 'True') {
                dispatch(setMovie(response.data));
                console.log(response.data);
                return response.data;
            }
        } catch (error: Error | any) {
            return rejectWithValue(error.response.status);
        }
    }
)

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [] as Movies[],
        selectedMovie: {},
        message: '',
        loading: false,
        success: null
    } as MovieState,
    reducers: {
        reset: (state: MovieState) => {
            state.movies = [];
            state.message = '';
            state.loading = false;
            state.success = null;
        },
        setMoviesList: (state, action) => {
            const { Search } = action.payload;
            state.movies = Search;
        },
        setMovie: (state, action) => {
            state.selectedMovie = action.payload;
        }
    },
    extraReducers: (builder) => {
        // getMoviesBySearch action pending
        builder.addCase(getMoviesBySearch.pending, (state: MovieState) => {
            state.loading = true;
            state.success = null;
        });

        // getMoviesBySearch action rejected
        builder.addCase(getMoviesBySearch.rejected, (state: MovieState) => {
            state.loading = false;
            state.success = false;
        });

        // getMoviesBySearch action fulfilled
        builder.addCase(getMoviesBySearch.fulfilled, (state: MovieState) => {
            state.loading = false;
            state.success = true;
        });
    }
});

export const selectMovies = (state: RootState) => state.movie;
export const { reset, setMoviesList, setMovie } = movieSlice.actions;