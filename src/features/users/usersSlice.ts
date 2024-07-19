import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/types";

const initialState = [
    {id: 'o', name: 'Dude Lebowski'},
    {id: '1', name: 'Neil Young'},
    {id: '2', name: 'Dave Gray'}
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state: {users: User[]}) => state.users;
export default userSlice.reducer;