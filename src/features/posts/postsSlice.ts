/**
 * A slice is where we divide up our state. This will have everything to do with the posts we create.
 */

import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./types/types";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
    date: sub(new Date(), {minutes: 10}).toISOString(),
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slices, the more I want Pizza",
    date: sub(new Date(), {minutes: 15}).toISOString(),
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
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state: { posts: Post[] }) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
