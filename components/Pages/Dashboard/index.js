import Header from "../../Layouts/Header";
import Goals from "../Goals";
import styles from "./index.module.css";

const Dashboard = ()=>{
    return <div className={styles["container"]}>
        <Header/>
        <Goals/>
    </div>
}

export default Dashboard;