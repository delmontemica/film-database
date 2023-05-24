import React from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getMoviesBySearch, reset, selectMovies } from 'app/slice/movieSlice';
import { Movies, Search } from 'types';

const Home = () => {
    const dispatch = useAppDispatch();
    const { movies, loading, success } = useAppSelector(selectMovies);

    const onFormSubmit = (values: Search) => {
        dispatch(reset());
        dispatch(getMoviesBySearch(values.keyword));
    }

    return (
        <>
            <Form onFinish={onFormSubmit}>
                <Form.Item name="keyword" label="Keyword">
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit" className="me-3">
                    Search
                </Button>
            </Form>

            { loading ? (
                <Spin className="m-auto w-100" />
            ) : (
                <>
                    { movies?.map((movie: Movies) => (
                        <div>Title: { movie.Title }</div>
                    ))}
                </>
            )}
        </>
    )
}

export default Home;