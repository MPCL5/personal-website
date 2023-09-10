import styles from "./Logo.module.scss"
import {Fira_Mono} from "next/font/google";

const mono = Fira_Mono({weight: "700", subsets: ['latin']});

export const Logo = () => {
    return <div className={`${styles.main} ${mono.className} text-primary`}>@MPCL5:~$</div>
}
