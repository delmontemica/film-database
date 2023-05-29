import React, { useEffect, useState } from 'react';
import { Col, Pagination, Row, Spin } from 'antd';
import { Movies } from 'types';
import MovieCard from '../MovieCard';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
    getMoviesBySearch,
    reset,
    selectMovies,
    handleUpdateFavoriteMovies
} from 'app/slice/movieSlice';

type Props = {
    keyword: string
}

const SearchResults = (props: Props) => {
    const dispatch = useAppDispatch();
    const { keyword } = props;
    const [ page, setPage ] = useState(1);
    const { movies, loading, success, totalResults } = useAppSelector(selectMovies);

    // Handle fetching and updating of data each time there's a change in dependencies
    useEffect(() => {
        handleSearchResultFetching();
    }, [keyword, page]);

    const handleSearchResultFetching = () => {
        dispatch(reset());
        dispatch(getMoviesBySearch({ keyword: keyword, page: page }));
    }

    const handleSavingAsFavorite = (movie: Movies) => {
        dispatch(handleUpdateFavoriteMovies(movie));
    }

    // Set current page value
    const onChangePage = (page: number) => {
        setPage(page);
    }

    return (
        <section>
            {success && movies.length !== 0 && (
                <h1>Search Results</h1>
            )}

            {loading ? (
                <Spin className="m-auto w-100" />
            ) : (
                <Row gutter={[0, 16]} justify="start">
                    {movies?.map((movie: Movies) => (
                        <Col key={movie.imdbID}>
                            <MovieCard movie={movie}
                                       saveAsFavorite={() => handleSavingAsFavorite(movie)}
                            />
                        </Col>
                    ))}
                </Row>
            )}

            { totalResults > 10 && (
                <Pagination
                    className="mt-4 mb-4"
                    pageSize={10}
                    current={page}
                    total={totalResults}
                    onChange={onChangePage}
                    showSizeChanger={false}
                />
            )}
        </section>
    )
}

export default SearchResults;