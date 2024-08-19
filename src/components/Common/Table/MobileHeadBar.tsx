import {ITableSidebarProps} from "@/components/Common/Table/Sidebar";
import clsx from "clsx";
import styles from "@/components/Common/Table/MobileHeadBar.module.scss";

export const TableMobileHeadBar =  ({data, active, onClick}: ITableSidebarProps) => {
    return (
        <div className={styles.main}>
            {/*<div className={styles.content}>*/}
                {data.map(item => (
                    <div
                        key={item.id}
                        onClick={() => onClick(item.id)}
                        className={clsx({[styles.active]: item.id === active}, styles.item)}
                    >
                        {item.value}
                    </div>
                ))}
            {/*</div>*/}
        </div>
    )
}
