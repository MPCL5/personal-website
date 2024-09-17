import styles from './index.module.scss'
import {IProjectCardData, ProjectCard} from "@/components/Pages/Home/Projects/Card";

const DATA: IProjectCardData[] = [
    {
        title: 'VAE-Anime',
        date: '2023/06/30',
        description: 'A simple implementation of Variational Auto Encoders on a anime dataset',
        link: 'MPCL5/VAE-Anime',
    },
    {
        title: 'Stream-Data-Challenge',
        date: '2023/04/01',
        description: 'Playing with data stream mining solutions',
        link: 'MPCL5/stream-data-challenge',
    },
]

export const HomeProjectsSection = () => {
    return (
        <section className={styles.main}>
            <div className={'container'}>
                <h2 className={styles.title}>Beloved Projects</h2>
                <div className={'row'}>
                    {DATA.map(item => (
                        <div className={'col-12 col-md-6'} key={item.title}>
                            <ProjectCard data={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
