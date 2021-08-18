import {RoomData} from "../../../models/Room";
import React from "react";
import styles from "./RoomList.module.css"
import RoomItem from "../RoomItem/RoomItem";
import {useDispatch} from "react-redux";
import * as roomsActions from "../../../store/actions/Rooms.actions";

const RoomsList: React.FC<{ items: Array<RoomData> }> = (props) => {
    const dispatch = useDispatch();

    const focusRoom =  (roomID:number, roomName:string) => {
        try {
            dispatch(roomsActions.focusRoom(roomID, roomName));
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <ul className={styles.list}>
            {props.items.map((item) => (
                <RoomItem
                    key={item.RoomID}
                    item={item}
                    onClick={(roomID:number,roomName:string)=>focusRoom(roomID, roomName)}/>
            ))}
        </ul>
    )
}

export default RoomsList;