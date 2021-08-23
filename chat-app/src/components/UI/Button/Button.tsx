import styles from "./Button.module.css";
import React from "react";

const Button:React.FC<{text: string, fn: () => void,active?:boolean }> =
    ({text,active=true,fn}) =>{

    const defaultFn = () =>{
        //alert("Invalid Action")
    }

    return(
        <div className={`${active?styles.active:styles.disabled}`}
            onClick={active?fn:defaultFn}>
            <div className={`${styles.button} ${active ? styles.buttonActive:styles.buttonDisabled}`}>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Button;