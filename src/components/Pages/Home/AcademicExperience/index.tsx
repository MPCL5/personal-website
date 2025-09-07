import styles from './index.module.scss'
import clsx from "clsx";
import {ITableData, Table} from "@/components/Common/Table";
import {Fall2020Experience} from "@/components/Pages/Home/AcademicExperience/Fall2020";
import {Spring2021Experience} from "@/components/Pages/Home/AcademicExperience/Spring2021";
import {Spring2022Experience} from "@/components/Pages/Home/AcademicExperience/Spring2022";
import {Fall2023Experience} from "@/components/Pages/Home/AcademicExperience/Fall2023";
import {Spring2024Experience} from "@/components/Pages/Home/AcademicExperience/Spring2024";
import {Fall2024Experience} from "@/components/Pages/Home/AcademicExperience/Fall2024";
import { Spring2025Experience } from '@/components/Pages/Home/AcademicExperience/Spring2025';

const SAMPLE_DATA: ITableData[] = [
    {id: '7', title: 'Spring 2025', text: <Spring2025Experience />},
    {id: '1', title: 'Fall 2024', text: <Fall2024Experience />},
    {id: '2', title: 'Spring 2024', text: <Spring2024Experience />},
    {id: '3', title: 'Fall 2023', text: <Fall2023Experience />},
    {id: '4', title: 'Spring 2022', text: <Spring2022Experience />},
    {id: '5', title: 'Spring 2021', text: <Spring2021Experience />},
    {id: '6', title: 'Fall 2020', text: <Fall2020Experience />},
]

export const HomeAcademicExperienceSection = () => {
    return (
        <section className={clsx(styles.main, 'container')}>
            <h2 className={styles.title}>Academic Experience</h2>
            <Table data={SAMPLE_DATA} />
        </section>
    )
}
