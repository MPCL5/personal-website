import styles from './Sidebar.module.scss'
import clsx from "clsx";

export interface ISidebarData {
    id: string;
    value: string;
}

interface ITableSidebarProps {
    data: ISidebarData[],
    active: string | undefined,
    onClick: (key: string) => any
}

export const TableSidebar = ({data, active, onClick}: ITableSidebarProps) => {
    return (
        <div className={clsx("col-12 col-md-3", styles.main)}>
            {data.map(item => (
                <div
                    key={item.id}
                    onClick={() => onClick(item.id)}
                    className={clsx({[styles.active]: item.id === active}, styles.item)}
                >
                    {item.value}
                </div>
            ))}
        </div>
    )
}
