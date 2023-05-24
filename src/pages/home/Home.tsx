import React, { useState } from 'react';
import { Button, Card, Col, Input, Row, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getMoviesBySearch, reset, selectMovies } from 'app/slice/movieSlice';
import { Movies } from 'types';
import 'pages/home/Home.scss';
import Navbar from 'components/header/Navbar';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

const { Search } = Input;
const { Meta } = Card;

const Home = () => {
    const dispatch = useAppDispatch();
    const { movies, loading, success } = useAppSelector(selectMovies);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredMovieId, setHoveredMovieId] = useState<string>('');

    const onSearch = (value: string) => {
        dispatch(reset());
        dispatch(getMoviesBySearch(value));
    }

    const handleMouseEnter = (movieId: string) => {
        setIsHovered(true);
        setHoveredMovieId(movieId)
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredMovieId('');
    }


    return (
        <>
            <Navbar />
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
                    { success && movies.length !== 0 && (
                        <h1>Search Results</h1>
                    )}

                    { loading ? (
                        <Spin className="m-auto w-100" />
                    ) : (
                        <Row gutter={[16, 16]}>
                            { movies?.map((movie: Movies) => (
                                <Col flex={2} key={movie.imdbID}>
                                    <Card
                                        hoverable
                                        style={{ width: 200 }}
                                        cover={
                                            <img
                                                alt={movie.Title}
                                                src={movie.Poster}
                                                className="movie-card-image"
                                            />
                                        }
                                        className="movie-card"
                                        onMouseEnter={() => handleMouseEnter(movie.imdbID)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Meta title={movie.Title} />
                                        <div className="movie-year">{movie.Year}</div>
                                        {isHovered && hoveredMovieId === movie.imdbID && <Button type="primary" size="small" block danger icon={<AiOutlineHeart />}>
                                            Add to Favorites
                                        </Button>}
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </section>

                <section>
                    <h1>Recently Added to Favorites</h1>
                </section>
            </div>
        </>
    )
}

export default Home;