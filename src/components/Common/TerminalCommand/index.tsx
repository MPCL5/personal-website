import styles from './index.module.scss'
import clsx from "clsx";

export const TerminalCommand = ({command, className}: { command: string; className?: string }) => {
    return <p className={clsx(styles.main, className)}><span className={styles.prompt}>$</span> {command}</p>
}
