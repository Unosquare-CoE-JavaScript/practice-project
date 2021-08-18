import {IoChatbubbleEllipsesOutline} from "@react-icons/all-files/io5/IoChatbubbleEllipsesOutline";
import React from "react";
import styles from "./HomeChatSection.module.css";

const InitialChatSection = () => {
    const {innerHeight: height} = window;

    return (
        <div className={styles.info}>
            <IoChatbubbleEllipsesOutline size={height * 0.5} color={'#d3cfcf'}/>
            <p>UnoSquare - chat-app practice project</p>
        </div>
    )
}
export default InitialChatSection;