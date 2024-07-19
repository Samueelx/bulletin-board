/**
 * A slice is where we divide up our state. This will have everything to do with the posts we create.
 */

import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./types/types";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slices, the more I want Pizza",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.push(action.payload);
      },
      prepare: (title: string, content: string, userId: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state: { posts: Post[] }) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
