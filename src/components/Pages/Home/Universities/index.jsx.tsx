import styles from './index.module.scss'
import clsx from "clsx";
import {UNIVERSITIES_DATA} from "@/constants/universities";
import {UniversityDataCard} from "@/components/Pages/Home/Universities/Card";


export const HomeUniversitiesSection = () => {
    return (
        <section className={clsx(styles.main, 'container')}>
            <h2 className={styles.title}>Education</h2>
            <div className={clsx("row", styles.container)}>
                {UNIVERSITIES_DATA.map(item => (
                    <div className="col-12 col-md-6" key={item.name + item.degree}>
                        <UniversityDataCard {...item} />
                    </div>
                ))}
            </div>
        </section>
    )
}
