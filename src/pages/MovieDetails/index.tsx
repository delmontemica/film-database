import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
    getMoviesByID,
    handleUpdateFavoriteMovies,
    resetMovieDetails,
    selectMovies
} from 'app/slice/movieSlice';
import { Button, Card, Col, Image, Row, Typography } from 'antd';
import './index.scss';
import { AiFillCaretLeft, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Movies } from 'types';

const { Paragraph } = Typography;

const MovieDetails = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { selectedMovie, favoriteMovies } = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(resetMovieDetails());
        dispatch(getMoviesByID(params.movieId ?? ''));
    }, [dispatch, params])

    const movieDetails = {
        Directors: selectedMovie?.Director,
        Writers: selectedMovie?.Writer,
        Actors: selectedMovie?.Actors,
        Language: selectedMovie?.Language,
        Country: selectedMovie?.Country,
        Awards: selectedMovie?.Awards
    }

    const movie: Movies = {
        Title: selectedMovie.Title ?? '',
        Year: selectedMovie.Year ?? '',
        imdbID: selectedMovie.imdbID ?? '',
        Type: selectedMovie.Type ?? '',
        Poster: selectedMovie.Poster ?? ''
    }

    const handleSavingAsFavorite = (movie: Movies) => {
        dispatch(handleUpdateFavoriteMovies(movie));
    }

    const isMovieFavorite = () => {
        return !favoriteMovies.some(existingMovie => existingMovie.imdbID === selectedMovie.imdbID);

    }

    return (
        <section className="mx-auto mt-4 movie-details-container">
            <Button
                className="mb-4"
                icon={<AiFillCaretLeft />}
                onClick={() => navigate(-1)}
            >
                Go back
            </Button>
            <Card>
                <Row gutter={[16, 24]}>
                    <Col md={6} sm={24}>
                        <div className="justify-content-center d-flex">
                            <Image className="movie-details-poster" src={selectedMovie?.Poster} />
                        </div>
                    </Col>
                    <Col md={18} sm={24}>
                        <div className="movie-details-title">
                            <Typography.Title level={2} className="m-0">{selectedMovie?.Title}</Typography.Title>
                            <Button
                                className="mt-2"
                                icon={isMovieFavorite() ? <AiOutlineHeart /> : <AiFillHeart />}
                                danger
                                onClick={() => handleSavingAsFavorite(movie)}
                            >
                                {isMovieFavorite() ? 'Add to Favorites' : 'Remove from Favorites'}
                            </Button>
                        </div>
                        <Typography.Title level={5} className="m-0">{selectedMovie?.Year}</Typography.Title>
                        <div className="">{selectedMovie?.Rated} • {selectedMovie?.Runtime} • {selectedMovie?.Genre} • {selectedMovie?.Released}</div>
                        <Typography.Title level={4}>Overview</Typography.Title>
                        <Paragraph>{selectedMovie?.Plot}</Paragraph>

                        <Row>
                            {Object.entries(movieDetails)?.map(([key, value]) => (
                                <Col sm={24} md={12} key={key}>
                                    <span className="movie-details-label">{key}</span> {value}
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Card>
        </section>
    )
};

export default MovieDetails;