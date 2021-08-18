import styles from "./ChatMessages.module.css";
import React from "react";
import {Message} from "../../../models/Room";
import MessageBox from "../../UI/MessageBox/MessageBox";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const ChatMessages:React.FC<{messages:Array<Message>}> = (props) => {

    const {userID} = useSelector((state: RootState) => state.user);

    return (
        <div className={styles.main}>
            <div className={styles.messagesContainer}>
                {
                    props.messages.map(item =>
                        <MessageBox message={item} income={item.UserID !== userID}/>
                    )
                }
            </div>
        </div>
    )
}
export default ChatMessages;