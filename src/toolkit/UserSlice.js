import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload);
        },
        removeUser: (state, action) => {
            state.data = state.data.filter((user, index) => index !== action.payload);
        },
        updateUser : () => {

        },
       
        cancelUser: (state) => {
            state.data = {
                name: '',
                email: "",
                age: "",
                city: ""
            }
        },
    },
});

export const { addUser, removeUser, updateUser, cancelUser } = UserSlice.actions;

export default UserSlice.reducer;


