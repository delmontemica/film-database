import React from 'react';
import { Layout, Button } from 'antd';
import './index.scss';
import { AiFillVideoCamera, AiOutlineHeart } from 'react-icons/ai';
const { Header } = Layout;

const Navbar = () => {
    return (
        <Header className="header">
            <AiFillVideoCamera className="logo" color="#8d1eb2" />
            <div className="logo">Film<span style={{ color: '#8d1eb2' }}>DB</span></div>
            <div className="header-subtitle">Your Source for Movie Information and Recommendations</div>
            <Button type="primary" shape="circle" icon={<AiOutlineHeart />} className="header-button" danger />
        </Header>
    )
};

export default Navbar;