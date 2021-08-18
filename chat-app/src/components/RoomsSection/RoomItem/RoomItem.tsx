import {RoomData} from "../../../models/Room";
import React from "react";
import Divider from "../../UI/Divider/Divider";
import styles from "./RoomItem.module.css";
import logo from "../../../assets/group-logo.png";

const RoomItem: React.FC<{ item: RoomData, onClick: (roomID: number, roomName: string) => void }>
    = (props) => {

    return (
        <li>
            <div className={styles.item}
                onClick={() => props.onClick(props.item.RoomID, props.item.Name)}>
                <div className={styles.itemContainer}>
                    <img src={logo} alt="Room Logo" className={styles.logo}/>
                    <p className={styles.title}>{props.item.Name}</p>
                </div>
            </div>
            <Divider/>
        </li>

    )
}

export default RoomItem;