import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import Navbar from 'components/Header';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const Default = () => {
    return (
        <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                    token: {
                        colorBgLayout: '#202124',
                    }
                }}
            >
            <Layout>
                <Navbar />
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </ConfigProvider>
    )
}

export default Default;