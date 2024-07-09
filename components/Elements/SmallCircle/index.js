import styles from "./index.module.css";

const SmallCircle = ({color})=>{
    return <div className={`${styles["container"]} ${styles[color]}`}>
        <div className={styles["mid-circle"]}>
            <div className={styles["inner-circle"]}></div>
        </div>
    </div>
}

export default SmallCircle;