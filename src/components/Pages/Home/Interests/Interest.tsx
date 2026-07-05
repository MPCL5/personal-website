import styles from './Interest.module.scss'
import {IResearchInterest} from "@/constants/researchInterests";

export const ResearchInterestItem = ({number, title, description}: IResearchInterest) => {
    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <span className={styles.number}>{number}</span>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    )
}
