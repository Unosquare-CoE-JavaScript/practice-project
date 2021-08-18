export const SET_USER_DATA = "SET_USER_DATA";

export const setUserData = (roomID: number, roomName: string) => {
    return {
        type: "SET_USER_DATA",
        focusedRoomID: roomID,
        focusedRoomName: roomName
    }
}