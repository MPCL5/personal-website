import styles from './Card.module.scss'
import {IUniversityData} from "@/constants/universities";
import Image from "next/image";

export const UniversityDataCard = (props: IUniversityData) => {
    return (
        <div className={styles.main}>
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
                <h3 className={styles.degree}>{props.degree.split('\n').map(item => <>{item}<br/></>)}</h3>
                <div className={styles.advisor}>Advisor: {props.advisor}</div>
                <div className={styles.date}>
                    <Image
                        src="/img/icon _calender_.svg"
                        height={18}
                        width={18}
                        priority={true}
                        alt="calender"
                        className="me-2"
                        draggable={false}
                    />
                    {props.date}
                </div>
            </div>
        </div>
    )
}
