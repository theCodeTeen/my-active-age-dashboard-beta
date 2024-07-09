import styles from "./index.module.css";

const ToggleBtn = ()=>{
    return <div className={styles["container"]}>
        <div className={`${styles["cta"]} ${styles["active"]}`}>
            Healthspan
        </div>
        <div className={styles["cta"]}>
            Lifespan
        </div>
    </div>
}

export default ToggleBtn;