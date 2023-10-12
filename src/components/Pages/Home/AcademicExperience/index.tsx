import styles from './index.module.scss'
import clsx from "clsx";
import {ITableData, Table} from "@/components/Common/Table";

const SAMPLE_DATA: ITableData[] = [
    {id: '1', title: 'Fall 2023', text: 'hello22'},
    {id: '2', title: 'Spring 2022', text: 'hello33'},
    {id: '3', title: 'Fall 2021', text: 'hello22'},
    {id: '4', title: 'Spring 2020', text: 'Fall 2020'},
    {id: '5', title: 'Fall 2020', text: 'Fall 2020'},
]

export const HomeAcademicExperienceSection = () => {
    return (
        <section className={clsx(styles.main, 'container')}>
            <h2 className={styles.title}>Academic Experience</h2>
            <Table data={SAMPLE_DATA} />
        </section>
    )
}
