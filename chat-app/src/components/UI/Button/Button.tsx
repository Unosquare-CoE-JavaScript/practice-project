import styles from "./Button.module.css";
import React from "react";

const Button:React.FC<{text: string, fn: () => void}> = (props) =>{
    return(
        <div className={styles.container} onClick={props.fn}>
            <div className={styles.btn}>
                <span>{props.text}</span>
            </div>
        </div>
    )
}

export default Button;