import styles from "./InitialSection.module.css"
import React, {useCallback, useEffect, useState} from "react";
import InitialChatSection from "./HomeChat/HomeChatSection";
import {fetchMessages} from "../../common/API";
import {Message} from "../../models/Room";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import ErrorSection from "./ChatError/ErrorSection";
import Chat from "./Chat/Chat";

const InitialSection: React.FC<{ roomID: number | null, roomName: string | null }> = (props) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const [messages, setMessages] = useState<null | Array<Message>>(null);

    const fetchRoomData = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetchMessages();
            setMessages(response);
        } catch (e) {
            setError(e.message);
        }
        setIsLoading(false);

    }, [])

    useEffect(() => {
        if (props.roomID && props.roomName) {
            fetchRoomData().catch(e => setError(e));
        }
    }, [fetchRoomData, props.roomID, props.roomName]);

    let content = <InitialChatSection/>;

    if (isLoading) {
        content = <LoadingSpinner/>;
    }

    if (error) {
        content = <ErrorSection message={error} retryFn={fetchRoomData}/>;
    }

    if (props.roomID && props.roomName && !isLoading && error === null && messages !== null) {
        content = <Chat messages={messages} chatTitle={props.roomName}/>;
    }

    return (
        <div className={styles['chat-section']}>
            {content}
        </div>
    )

}

export default InitialSection;