import React, { useState } from 'react';
import { Input } from 'antd';
import 'pages/Home/index.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchResults from 'components/SearchResults';
import RecentFavorites from 'components/RecentFavorites';

const { Search } = Input;

const Home = () => {
    const [ keyword, setKeyword ] = useState('');

    // Set keyword value
    const onSearch = (value: string) => {
        setKeyword(value);
    };

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

            <SearchResults
                keyword={keyword}
            />

            <RecentFavorites />
        </div>
    );
};

export default Home;