import React from 'react';
import { Button, Card, ConfigProvider } from 'antd';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './index.scss';
import { Movies } from 'types';

const { Meta } = Card;

type Props = {
    movie: Movies
    saveAsFavorite?: () => void,
    favoritesList?: Movies[]
}

const MovieCard = (props: Props) => {
    const { movie, saveAsFavorite, favoritesList } = props;

    const setFavoriteIcon = () => {
        if (favoritesList?.includes(movie)) {
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
        </ConfigProvider>
    )
}

export default MovieCard;