import styles from "./InitialSection.module.css"
import React, {useEffect, useState, useCallback} from "react";
import InitialChatSection from "./HomeChat/HomeChatSection";
import {Message} from "../../models/Room";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import ErrorSection from "./ChatError/ErrorSection";
import Chat from "./Chat/Chat";
import {useHttp} from "../../hooks/use-http";
import {RequestConfig} from "../../models/RequestConfig";
import {messagesList} from "../../dummy-data";

const requestConfig= {
    url:'http://universities.hipolabs.com/search?country=United+States'
} as RequestConfig;

const InitialSection: React.FC<{ roomID: number | null, roomName: string | null }> = (props) => {

    const [messages, setMessages] = useState<null | Array<Message>>(null);

    const setDataResponse = (responseBody: any) => {
        //TODO uncomment above line when the endpoints are ready
        // setMessages(responseBody.messages as Array<Message>);
        setMessages(messagesList)
    };

    const {isLoading, error, sendRequest: fetchMessages} = useHttp();

    const fetchData = useCallback( ()=>{
        fetchMessages(requestConfig, setDataResponse);
    },[fetchMessages]);

    useEffect(() => {
        if (props.roomID && props.roomName) {
            fetchData();
        }
    }, [fetchData,props.roomID, props.roomName]);

    let content = <InitialChatSection/>;

    if (isLoading) content = <LoadingSpinner/>;

    if (error) content = <ErrorSection message={error} retryFn={fetchData}/>;

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