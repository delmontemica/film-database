import React from 'react';
import { Button, Card, ConfigProvider } from 'antd';
import { AiOutlineHeart } from 'react-icons/ai';
import './MovieCard.scss';

const { Meta } = Card;

type Props = {
    title: string,
    poster?: string,
    id: string,
    year: string,
    saveAsFavorite: () => void
}

const MovieCard = (props: Props) => {
    const { title, poster, year, saveAsFavorite } = props;

    return (
        <ConfigProvider>
            <Button
                type="primary"
                shape="circle"
                danger icon={<AiOutlineHeart />}
                className="favorite-button"
                onClick={saveAsFavorite}
            />
            <Card
                hoverable
                cover={
                    <div className="movie-card-image-container">
                        <img
                            alt={title}
                            src={poster}
                        />
                    </div>
                }
                className="movie-card"
            >
                <Meta title={title} description={year} />
            </Card>
        </ConfigProvider>
    )
}

export default MovieCard;