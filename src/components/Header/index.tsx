import React from 'react';
import { Layout, Button } from 'antd';
import './index.scss';
import { AiFillVideoCamera, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Header className="header">
            <div className="header-text">
                <div className="header-logo">
                    <AiFillVideoCamera className="header-logo-text"
                                       color="#8d1eb2" />
                    <div className="header-logo-text">Film<span
                        style={ { color: '#8D1EB2' } }>DB</span></div>
                </div>

                <div className="header-subtitle">Your Source for Movie
                    Information and Recommendations
                </div>
            </div>
            <Button
                type="primary"
                shape="circle"
                icon={ <AiOutlineHeart /> }
                className="header-button"
                onClick={ () => navigate('/movies/favorites') }
                danger />
        </Header>
    );
};

export default Navbar;