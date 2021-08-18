import Loader from "react-loader-spinner";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () =>{
    return(
        <div className={styles.info}>
            <Loader
                type={"TailSpin"}
                color={"#00BFFF"}
                height={100}
                width={100}
            />
        </div>
    )
}

export default LoadingSpinner;