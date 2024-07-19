import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

/**Anytime we create a reducer, we need to add it to the store. */
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;