import { configureStore } from '@reduxjs/toolkit'
import {roomsReducer} from "./reducers/Rooms.reducer";
import {userReducer} from "./reducers/User.reducer";

export const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        user:userReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
/*
export interface RootState {
    rooms: RoomsState;
}
*/
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch