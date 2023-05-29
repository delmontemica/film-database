import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getMoviesByID, reset, selectMovies } from 'app/slice/movieSlice';
import { Button, Card, Col, Image, Row, Typography } from 'antd';
import './index.scss';
import { AiFillCaretLeft, AiOutlineHeart } from 'react-icons/ai';

const { Paragraph } = Typography;

const MovieDetails = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { selectedMovie } = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(reset());
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
                    <Col span={6}>
                        <div className="justify-content-center d-flex">
                            <Image width={230} src={selectedMovie?.Poster} />
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="d-flex flex-row justify-content-between">
                            <Typography.Title level={1} className="m-0">{selectedMovie?.Title}</Typography.Title>
                            <Button className="mt-2" icon={<AiOutlineHeart />} danger>Add to Favorites</Button>
                        </div>
                        <Typography.Title level={5} className="m-0">{selectedMovie?.Year}</Typography.Title>
                        <div className="">{selectedMovie?.Rated} • {selectedMovie?.Runtime} • {selectedMovie?.Genre} • {selectedMovie?.Released}</div>
                        <Typography.Title level={4}>Overview</Typography.Title>
                        <Paragraph>{selectedMovie?.Plot}</Paragraph>

                        <Row>
                            {Object.entries(movieDetails)?.map(([key, value]) => (
                                <Col span={12} key={key}>
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