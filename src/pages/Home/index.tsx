import React from 'react';
import { Input } from 'antd';
import 'pages/Home/index.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchResults from 'components/SearchResults';
import RecentFavorites from 'components/RecentFavorites';
import { reset, setKeyword } from 'app/slice/movieSlice';
import { useAppDispatch } from 'app/hooks';

const { Search } = Input;

const Home = () => {
    const dispatch = useAppDispatch();

    // Set keyword value
    const onSearch = (value: string) => {
        dispatch(reset());
        dispatch(setKeyword(value));
    };

    return (
        <div className="container">
            <section className="search-container">
                <Search
                    prefix={ <AiOutlineSearch /> }
                    placeholder="Input a keyword or the title of the movie"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={ onSearch }
                />
            </section>

            <SearchResults />

            <RecentFavorites />
        </div>
    );
};

export default Home;