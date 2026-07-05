import styles from './index.module.scss'
import clsx from "clsx";
import {UNIVERSITIES_DATA} from "@/constants/universities";
import {UniversityDataCard} from "@/components/Pages/Home/Universities/Card";
import {TerminalCommand} from "@/components/Common/TerminalCommand";


export const HomeUniversitiesSection = () => {
    return (
        <section className={clsx(styles.main, 'container')}>
            <h2 className={styles.title}>Education</h2>
            <TerminalCommand command="ls ~/education --sort=recent"/>
            <div className={styles.stack}>
                {UNIVERSITIES_DATA.map(item => (
                    <UniversityDataCard {...item} key={item.name + item.degree} />
                ))}
            </div>
        </section>
    )
}
