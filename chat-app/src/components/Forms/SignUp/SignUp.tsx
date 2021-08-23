import React from "react";
import styles from "./SignUp.module.css";
import Button from "../../UI/Button/Button";

export const SignUp: React.FC<{ setSignInMode: () => void }> = (props) => {
    return (
        <div className={styles.formBox}>
            <p>Register Form</p>

            <div className={styles.row}>
                <input className={styles.input} type="text" placeholder={"Name(s)"}/>
                <input className={styles.input} type="text" placeholder={"Last name"}/>
            </div>

            <div className={styles.row}>
                <input className={styles.input} type="email" placeholder={"Email"}/>
                <select name="" id="" className={styles.selectInput} defaultValue="Other">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>


            <div className={styles.row}>
                <input className={styles.input} type="password" placeholder={"Password"}/>
                <input className={styles.input} type="password" placeholder={"Confirm Password"}/>
            </div>

            <Button text={"Sign Up"} fn={() => console.log("Sign Up FN")} active={false}/>
            <p className={styles.text}>Already have an account?
                <span onClick={props.setSignInMode} className={styles.link}> Sign In </span>
                or Register with:
            </p>
            <div className={styles.row}>
                <Button text={"GitHub"} fn={() => console.log("Login Github")}/>
                <Button text={"Facebook"} fn={() => console.log("Login Facebook")}/>
                <Button text={"Google"} fn={() => console.log("Login Google")}/>

            </div>
        </div>
    )
}