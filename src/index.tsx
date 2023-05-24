import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/lib/config-provider';

const persistor = persistStore(store);

const antdConfig: ConfigProviderProps = {
    autoInsertSpaceInButton: false,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <ConfigProvider {...antdConfig}>
                    <App />
                </ConfigProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
