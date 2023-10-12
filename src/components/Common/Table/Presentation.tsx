import styles from './Presentation.module.scss'
import clsx from "clsx";

export const TablePresentation = ({text}: { text: string | undefined }) => {
    return (
        <div className={clsx('col-12 col-md-9', styles.main)}>
            {text}
        </div>
    )
}
