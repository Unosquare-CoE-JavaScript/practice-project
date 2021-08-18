import styles from "./ErrorSection.module.css";
import React from "react";
import {IoSadOutline} from "@react-icons/all-files/io5/IoSadOutline";
import Button from "../../UI/Button/Button";

const ErrorSection:React.FC<{message: string, retryFn: () => void}> = (props) =>{
    const {innerHeight: height} = window;
    return(
        <div className={styles.info}>
            <IoSadOutline size={height * 0.5} color={'#d3cfcf'}/>
            <p>{props.message}</p>
            <Button text={"Retry"} fn={props.retryFn}/>
        </div>
    )
}
export default ErrorSection;