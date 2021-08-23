import React from 'react';
import styles from "./Home.module.css";
import RoomListSection from "../../components/RoomsSection/RoomListSection";
import InitialSection from "../../components/ChatSection/InitialSection";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const Home = () => {
    const {focusedRoomID,focusedRoomName} = useSelector((state: RootState) => state.rooms)
    return (
        <div className={styles.box}>
            <RoomListSection/>
            <InitialSection roomID={focusedRoomID} roomName={focusedRoomName}/>
        </div>
    );
}

export default Home;
