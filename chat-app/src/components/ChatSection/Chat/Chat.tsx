import React from "react";
import {Message} from "../../../models/Room";
import styles from "./Chat.module.css"
import ChatInput from "../ChatInput/ChatInput";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessages from "../ChatMessages/ChatMessages";

const Chat:React.FC<{messages: Array<Message>, chatTitle:string}> = (props) =>{
    return(
        <div className={styles.chatContainer} >
            <ChatHeader chatTitle={props.chatTitle}/>
            <ChatMessages messages={props.messages}/>
            <ChatInput/>
        </div>
    )
}
export default Chat;