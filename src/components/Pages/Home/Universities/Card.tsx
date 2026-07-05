import styles from './Card.module.scss'
import {IUniversityData} from "@/constants/universities";
import Image from "next/image";
import clsx from "clsx";

export const UniversityDataCard = (props: IUniversityData) => {
    return (
        <div className={clsx(styles.main, props.current && styles.current)}>
            <div className={styles.logo}>
                <Image
                    src={props.logo.path}
                    alt={props.name}
                    height={props.logo.height}
                    width={props.logo.width}
                    draggable={false}
                />
            </div>
            <div className={styles.textArea}>
                <p className={clsx(styles.kicker, props.current && styles.kickerCurrent)}>{props.kicker}</p>
                <h3 className={styles.degree}>{props.degree}</h3>
                <p className={styles.advisor}>{props.name} · Advisor: {props.advisor}</p>
            </div>
            <span className={clsx(styles.date, props.current && styles.dateCurrent)}>{props.date}</span>
        </div>
    )
}
