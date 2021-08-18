import styles from "./ChatInput.module.css";
import {IoSend} from "@react-icons/all-files/io5/IoSend";
import React from "react";

const ChatInput = () => {

    return (
        <div className={styles.main}>
            <input className={styles.input} type="text" placeholder={"Write a message!"}/>
            <div className={styles.sendBtn}>
                <IoSend size={30} color={'#fff'} style={{marginLeft:5}}/>
            </div>
        </div>
    )
}
export default ChatInput;