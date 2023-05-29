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
            <AiFillVideoCamera className="logo" color="#8d1eb2" />
            <div className="logo">Film<span style={{ color: '#8d1eb2' }}>DB</span></div>
            <div className="header-subtitle">Your Source for Movie Information and Recommendations</div>
            <Button
                type="primary"
                shape="circle"
                icon={<AiOutlineHeart />}
                className="header-button"
                onClick={() => navigate('/movies/favorites')}
                danger />
        </Header>
    )
};

export default Navbar;