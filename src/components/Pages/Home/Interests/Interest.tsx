import styles from './Interest.module.scss'
import {Fira_Mono} from "next/font/google";
import clsx from "clsx";

const mono = Fira_Mono({weight: "400", subsets: ['latin']});

export const ResearchInterestItem = ({text}: { text: string; }) => {
    return (
        <div className={clsx(styles.main, mono.className)}>
            <div className={styles.rectangle}/>
            {text}
        </div>
    )
}
