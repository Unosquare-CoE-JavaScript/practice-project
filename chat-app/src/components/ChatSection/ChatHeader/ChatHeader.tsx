import styles from "./ChatHeader.module.css";
import React from "react";
import logo from "../../../assets/group-logo.png";

const ChatHeader:React.FC<{chatTitle:string}> = (props) => {

    return (
        <div className={styles.main}>
            <img src={logo} alt="Room Logo" className={styles.logo}/>
            <p className={styles.title}>
                {props.chatTitle}
            </p>
        </div>
    )
}
export default ChatHeader;