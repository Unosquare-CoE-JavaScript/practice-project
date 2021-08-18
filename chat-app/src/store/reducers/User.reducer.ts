import {SET_USER_DATA} from "../actions/User.actions";
import {AnyAction} from "@reduxjs/toolkit";

export interface UserState {
    userID: number | null;
    firstName: string | null;
    lastName: string | null;
    userName: string | null;
}

const initialState = {
    // userID: null,
    // firstName: null,
    // lastName: null,
    // userName: null,

    // Delete below section and uncomment above section

    userID: 3,
    firstName: "Hugo",
    lastName: "Aviles",
    userName: "Yes",
};


export const userReducer = (state: UserState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                userID: action.userID,
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName,
            };
        }
        default:
            return state;
    }
};