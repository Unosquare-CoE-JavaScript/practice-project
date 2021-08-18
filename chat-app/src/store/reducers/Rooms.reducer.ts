import {FOCUS_ROOM} from "../actions/Rooms.actions";
import {AnyAction} from "@reduxjs/toolkit";

export interface RoomsState {
    focusedRoomID: number | null;
    focusedRoomName: string | null;
}

const initialState = {
    focusedRoomID: null,
    focusedRoomName: null
};

// export type Action = { type: "FOCUS_ROOM"; focusedRoomID: number; focusedRoomName:string; };

export const roomsReducer = (state: RoomsState = initialState, action: AnyAction) => {
    switch (action.type) {
        case FOCUS_ROOM: {
            return {
                focusedRoomID: action.focusedRoomID,
                focusedRoomName: action.focusedRoomName,
            };
        }
        default:
            return state;
    }
};