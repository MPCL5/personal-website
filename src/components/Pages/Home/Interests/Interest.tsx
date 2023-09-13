import styles from './Interest.module.scss'

export const ResearchInterestItem = ({text}: { text: string; }) => {
    return (
        <div className={styles.main}>
            <div className={styles.rectangle} />
            {text}
        </div>
    )
}
