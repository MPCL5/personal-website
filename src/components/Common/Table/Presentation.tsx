import styles from './Presentation.module.scss'
import clsx from "clsx";
import {ReactNode} from "react";

export const TablePresentation = ({text}: { text: ReactNode | undefined }) => {
    return (
        <div className={clsx('col-md-9', styles.main)}>
            {text}
        </div>
    )
}
