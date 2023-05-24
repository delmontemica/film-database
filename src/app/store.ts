import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userSlice } from 'app/slice/userSlice';
import { movieSlice } from 'app/slice/movieSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
    blacklist: ['user'],
};

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['username', 'token'],
};

const reducers = combineReducers({
    user: persistReducer(userPersistConfig, userSlice.reducer),
    movie: movieSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
