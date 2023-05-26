import React, { useEffect, useState } from 'react';
import { Col, Input, Pagination, Row, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getMoviesBySearch, reset, selectMovies } from 'app/slice/movieSlice';
import { Movies } from 'types';
import 'pages/home/Home.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import MovieCard from 'components/card/MovieCard';

const { Search } = Input;

const Home = () => {
    const dispatch = useAppDispatch();
    const { movies, loading, success, totalResults } = useAppSelector(selectMovies);
    const [ page, setPage ] = useState(1);
    const [ keyword, setKeyword ] = useState('');

    useEffect(() => {
        handleSearchResultFetching();
    }, [keyword, page]);

    const onChangePage = (page: number) => {
        setPage(page);
    }

    const onSearch = (value: string) => {
        setKeyword(value);
    };

    const handleSearchResultFetching = () => {
        dispatch(reset());
        dispatch(getMoviesBySearch({ keyword: keyword, page: page }));
    }

    const handleSavingAsFavorite = (id: string) => {
        // Fetch existing list of favorites from localStorage
        const storedFavoriteIdsJson: string | null = localStorage.getItem('favorites');
        let storedFavoriteIds: string[] = storedFavoriteIdsJson ? JSON.parse(storedFavoriteIdsJson) : [];

        // Check if selected ID already exists in current favorites
        if (!storedFavoriteIds.includes(id)) {
            // If selected ID doesn't exist, add to favorites.
            storedFavoriteIds.push(id);
        } else {
            // If selected ID already exists, remove from favorites.
            storedFavoriteIds = storedFavoriteIds.filter(existingId => existingId !== id);
        }

        // Convert new list to string for storing to localStorage
        const updatedFavoriteIdsJson: string = JSON.stringify(storedFavoriteIds);

        // Update localStorage
        localStorage.setItem('favorites', updatedFavoriteIdsJson);
    }

    return (
        <div className="container">
            <section className="search-container">
                <Search
                    prefix={<AiOutlineSearch />}
                    placeholder="Input a keyword or the title of the movie"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </section>

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
                                <MovieCard title={movie.Title}
                                           id={movie.imdbID}
                                           year={movie.Year}
                                           poster={movie.Poster}
                                           saveAsFavorite={() => handleSavingAsFavorite(movie.imdbID)}
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

            <section>
                <h1>Recently Added to Favorites</h1>
            </section>
        </div>
    );
};

export default Home;