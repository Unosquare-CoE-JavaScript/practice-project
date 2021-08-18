export const FOCUS_ROOM = "FOCUS_ROOM";

export const focusRoom = (roomID: number, roomName: string) => {
    return {
        type: "FOCUS_ROOM",
        focusedRoomID: roomID,
        focusedRoomName: roomName
    }
}