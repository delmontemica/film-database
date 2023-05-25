import React, { useState } from 'react';
import { Button, Card, ConfigProvider } from 'antd';
import { AiOutlineHeart } from 'react-icons/ai';
import './MovieCard.scss';

const { Meta } = Card;

type Props = {
    title: string,
    poster?: string,
    id: string,
    year: string
}

const MovieCard = (props: Props) => {
    const { title, poster, id, year } = props;

    return (
        <ConfigProvider>
            <Button type="primary" shape="circle" danger icon={<AiOutlineHeart />} className="favorite-button" />
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