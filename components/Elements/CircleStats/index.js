import SmallCircle from "../SmallCircle";
import styles from "./index.module.css";

const CircleStats = ()=>{
    return <div className={styles["container"]}>
        <div className={styles["inner-circle"]}>
            <div className={styles["stats-circle"]}>
                <div className={styles["text"]}>
                    <div>75%</div>
                    <div>ON TRACK</div>
                </div>
            </div>
            <div className={styles["cardio_circle"]}>
                <SmallCircle color={"green"}/>
            </div>
            <div className={styles["metabolic_circle"]}>
                <SmallCircle color={"yellow"}/>
            </div>
            <div className={styles["neoplasia_circle"]}>
                <SmallCircle color={"red"}/>
            </div>
            <div className={styles["hormones_circle"]}>
                <SmallCircle color={"yellow"}/>
            </div>
            <div className={styles["sleep_circle"]}>
                <SmallCircle color={"green"}/>
            </div>
            <div className={styles["body_circle"]}>
                <SmallCircle color={"green"}/>
            </div>
            <div className={styles["idk_circle"]}>
                <SmallCircle color={"green"}/>
            </div>
        </div>
    </div>
}

export default CircleStats;