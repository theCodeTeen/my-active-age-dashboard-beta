import CircleStats from "../../Elements/CircleStats";
import ToggleBtn from "../../Elements/ToggleBtn";
import styles from "./index.module.css";

const Goals = ()=>{
    return <div className={styles["container"]}>
        <div className={styles["btn_container"]}>
            <div className={styles["togglebtn"]}>
                <ToggleBtn/>
            </div>
        </div>
        <div className={styles["stats_container"]}>
            <div className={styles["left"]}>
                <div className={styles["circlestats"]}>
                    <CircleStats/>
                </div>
            </div>
            <div className={styles["right"]}>
                Will implement this after you hire me!😉 <br/>
                [Not responsive yet, please view in a device near 1280px x 800px]
            </div>
        </div>
    </div>
}

export default Goals;