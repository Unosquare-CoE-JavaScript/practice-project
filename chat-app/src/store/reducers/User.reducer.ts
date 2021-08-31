import {SIGN_IN_USER} from "../actions/User.actions";
import {AnyAction} from "@reduxjs/toolkit";

export interface UserState {
    userID: number | null;
    firstName: string | null;
    lastName: string | null;
    userName: string | null;
    loggedIn:boolean;
}

const initialState = {
/*    userID: null,
    firstName: null,
    lastName: null,
    userName: null,
    loggedIn:false*/

    // Delete below section and uncomment above section

    userID: 3,
    firstName: "Hugo",
    lastName: "Aviles",
    userName: "Yes",
    loggedIn: false,
};


export const userReducer = (state: UserState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SIGN_IN_USER: {
            return {
                userID: action.userID,
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName,
                loggedIn:true
            };
        }
        default:
            return state;
    }
};