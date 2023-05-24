import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getMoviesByID, reset, selectMovies } from 'app/slice/movieSlice';

const MovieDetails = () => {
    const params = useParams();
    const dispatch = useAppDispatch();

    const { selectedMovie, loading, success } = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(reset());
        dispatch(getMoviesByID(params.movieId ?? ''));
    }, [dispatch, params])

    return (
        <div>Title: {selectedMovie.Title}</div>
    )
};

export default MovieDetails;