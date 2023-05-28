import React from 'react';
import { useAppSelector } from 'app/hooks';
import { selectMovies } from 'app/slice/movieSlice';
import { Movies } from 'types';
import { Col, Row } from 'antd';
import MovieCard from 'components/MovieCard';

const RecentFavorites = () => {
    const { favoriteMovies } = useAppSelector(selectMovies);

    return (
        <section>
            <h1>Recently Added to Favorites</h1>

            {/*TODO: If recent favorites are in homepage, limit display to 10.*/}
            {/*TODO: If recent favorites are displayed on separate page, display all.*/}
            <Row gutter={[0, 16]} justify="start">
                {favoriteMovies?.map((movie: Movies) => (
                    <Col key={movie.imdbID}>
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default RecentFavorites;