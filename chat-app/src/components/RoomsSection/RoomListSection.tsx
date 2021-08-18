import React from 'react';
import styles from "./RoomListSection.module.css";
import RoomsList from "./RoomsList/RoomsList";
import Divider from "../UI/Divider/Divider";
import {roomList} from "../../dummy-data";

const RoomListSection = () => {
    return (
        <section className={styles['rooms-section']}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>Available Rooms</span>
            </div>
            <Divider/>
            <RoomsList items={roomList}/>
        </section>
    );
}

export default RoomListSection;
