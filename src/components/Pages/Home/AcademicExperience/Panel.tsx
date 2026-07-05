import styles from './Panel.module.scss'
import {IAcademicExperience} from "@/constants/academicExperience";

export const AcademicPanel = ({institution, roles, community, paper}: IAcademicExperience) => {
    return (
        <>
            <p className={styles.blockTitle}>{institution}</p>
            <div className={styles.group}>
                {roles.map(role => <p className={styles.line} key={role}>{role}</p>)}
            </div>

            {community && community.length > 0 && (
                <>
                    <p className={styles.blockTitle}>Community Service</p>
                    <div className={styles.group}>
                        {community.map(item => <p className={styles.line} key={item}>{item}</p>)}
                    </div>
                </>
            )}

            {paper && (
                <>
                    <p className={styles.blockTitle}>Papers</p>
                    <p className={styles.paperTitle}>{paper.title}</p>
                    <p className={styles.paperAuthors}>Authors: {paper.authors}</p>
                    <p className={styles.paperAbstract}>{paper.abstract}</p>
                    <p className={styles.paperVenue}>
                        {paper.venue} ·{' '}
                        <a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.url}</a>
                    </p>
                </>
            )}
        </>
    )
}
