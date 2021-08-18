import React from "react";
import styles from "./MessageBox.module.css";
import {Message} from "../../../models/Room";

const MessageBox: React.FC<{ message: Message, income: boolean }> = (props) => {

    const timeStamp = props.message.TimeStamp.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (
        <div className={`${styles.message} ${props.income ? styles.income : styles.outcome}`}>
            <p className={styles.username}>{ props.income ? props.message.UserName : "You"}</p>
            <p className={styles.text}>{props.message.Text}</p>
            <p className={styles.time}>{timeStamp}</p>
        </div>
    )
}
export default MessageBox;