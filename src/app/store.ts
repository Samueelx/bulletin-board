import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';

/**Anytime we create a reducer, we need to add it to the store. */
export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;