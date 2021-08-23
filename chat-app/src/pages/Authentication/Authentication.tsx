import styles from "./Authentication.module.css";
import React, {useState} from "react";
import {SignIn} from "../../components/Forms/SignIn/SignIn";
import {SignUp} from "../../components/Forms/SignUp/SignUp";

export const Authentication = () => {
    const [signInMode, setSignInMode] = useState(true);

    const signInHandler = async (email:string, password:string) =>{
        console.log(email, password)
    }

    return (
        <div className={styles.root}>
            {
                signInMode ?
                    <SignIn setSignInMode={() => setSignInMode(false)} signInFn={signInHandler}/>
                    :
                    <SignUp setSignInMode={() => setSignInMode(true)}/>
            }
        </div>
    )
}