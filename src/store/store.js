import { configureStore } from '@reduxjs/toolkit';
import typingReducer from './slices/typingSlice';

export const store = configureStore({
    reducer: {
        typing: typingReducer,
    },
});
