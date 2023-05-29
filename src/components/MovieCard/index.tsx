import React from 'react';
import { Button, Card, ConfigProvider } from 'antd';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './index.scss';
import { Movies } from 'types';
import { useAppSelector } from 'app/hooks';
import { selectMovies } from 'app/slice/movieSlice';
import { Link } from 'react-router-dom';

const { Meta } = Card;

type Props = {
    movie: Movies
    saveAsFavorite?: () => void
}

const MovieCard = (props: Props) => {
    const { favoriteMovies, movies } = useAppSelector(selectMovies);
    const { movie, saveAsFavorite } = props;

    const setFavoriteIcon = () => {
        if (favoriteMovies?.includes(movie)) {
            return <AiFillHeart />;
        }
        return <AiOutlineHeart />;
    }

    return (
        <ConfigProvider>
            {saveAsFavorite && (
                <Button
                    type="primary"
                    shape="circle"
                    danger
                    icon={setFavoriteIcon()}
                    className="favorite-button"
                    onClick={saveAsFavorite}
                />
            )}

            <Link to={`/movies/${movie.imdbID}`}>
                <Card
                    hoverable
                    cover={
                        <div className="movie-card-image-container">
                            <img
                                alt={movie.Title}
                                src={movie.Poster}
                            />
                        </div>
                    }
                    className="movie-card"
                >
                    <Meta title={movie.Title} description={movie.Year} />
                </Card>
            </Link>
        </ConfigProvider>
    )
}

export default MovieCard;