import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './modules/chatSlice';

export const appStore = () => {
    return configureStore({
        reducer: {
            chat: chatSlice,
        },
    });
};

export type AppStore = ReturnType<typeof appStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];