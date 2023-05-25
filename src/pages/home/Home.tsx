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
                    <Row gutter={[0, 16]}>
                        {movies?.map((movie: Movies) => (
                            <Col flex={2} key={movie.imdbID}>
                                <MovieCard title={movie.Title}
                                           id={movie.imdbID}
                                           year={movie.Year}
                                           poster={movie.Poster}
                                />
                            </Col>
                        ))}
                    </Row>
                )}

                { totalResults > 10 && (
                    <Pagination
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