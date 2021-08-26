import Button from "../../UI/Button/Button";
import React, {useState} from "react";
import styles from "./SignIn.module.css";
import Logo from "../../../assets/unosquare_logo.svg";
import {useHttp} from "../../../hooks/use-http";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import {RequestConfig} from "../../../models/RequestConfig";
import {useDispatch} from "react-redux";
import {signInUser} from "../../../store/actions/User.actions";

export const SignIn: React.FC<{ setSignInMode: () => void, signInFn: (e: string, p: string) => void }> = (props) => {

    const [userName, setUserName] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const {isLoading, error, sendRequest} = useHttp();

    const dispatch = useDispatch();

    const validateResponse = (userData: any) => {
        dispatch(signInUser(userData.userID, userData.firstName, userData.lastName, userData.userName))
    }

    const submitHandler = () => {
        const requestConfig = {
            url: 'http://universities.hipolabs.com/search?country=United+States',
            method: 'POST',
            body: {userName: userName, password: password}
        } as RequestConfig;
        sendRequest(requestConfig, validateResponse);
        setUserName(null);
        setPassword(null);
    };

    return (
        <div className={styles.formBox}>
            {isLoading ? <LoadingSpinner/>
                :
                <>
                    <img src={Logo} alt="Unosquare Logo" className={styles.logo}/>
                    <input className={styles.input}
                           type="text"
                           placeholder={"UserName"}
                           onChange={e => setUserName(e.currentTarget.value.trim())}/>
                    <input className={styles.input}
                           type="password"
                           placeholder={"Password"}
                           onChange={e => setPassword(e.currentTarget.value.trim())}/>
                    <Button text={"Sign In"}
                            fn={submitHandler}
                            active={userName !== null && password !== null}/>
                    {error ?
                        <p className={styles.text}>Error: {error.toString()}</p>
                        :
                        <></>
                    }
                    <p className={styles.text}>You don't have an account?
                        <span onClick={props.setSignInMode} className={styles.link}> Sign up</span>
                    </p>
                </>
            }

        </div>
    )
}