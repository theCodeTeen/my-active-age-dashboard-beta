import Image from "next/image";
import styles from "./index.module.css";

const Header = ()=>{
    return <div className={styles["container"]}>
        <div className={styles["content"]}>
            <div className={styles["left"]}>
                <div className={styles["logo"]}>
                    <Image src={"/myactiveagelogo.png"} alt="My active age logo" layout="fill" objectFit="contain"/>
                </div>
                <div className={styles["nav"]}>
                    <ul>
                        <li>
                            <a href="#" className={styles["active"]}>Goal</a>
                        </li>
                        <li>
                            <a href="#">Strategy</a>
                        </li>
                        <li>
                            <a href="#">Tactics</a>
                        </li>
                        <li>
                            <a href="#">Appointments</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles["right"]}>
                <div className={styles["btns"]}>
                    <div>
                        Profile
                    </div>
                    <div>
                        Settings
                    </div>
                </div>
                <div className={styles["seperator"]}>
                    |
                </div>
                <div className={styles["logout"]}>
                    Log out
                </div>
            </div>
        </div>
    </div>
}

export default Header;