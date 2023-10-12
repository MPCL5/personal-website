'use client';

import styles from './index.module.scss'
import {ISidebarData, TableSidebar} from "@/components/Common/Table/Sidebar";
import {TablePresentation} from "@/components/Common/Table/Presentation";
import {useState} from "react";
import clsx from "clsx";

export interface ITableData {
    id: string;
    title: string;
    text: string;
}


export const Table = ({data}: { data: ITableData[] }) => {
    const [active, setActive] = useState<ITableData>(data[0])
    const sidebarData: ISidebarData[] = data.map(item => ({id: item.id, value: item.title}))


    return (
        <div className={clsx("row", styles.main)}>
            <TableSidebar
                data={sidebarData}
                active={active?.id}
                onClick={(key) => setActive(data.find(item => item.id == key))}
            />
            <TablePresentation text={active?.text} />
        </div>
    )
}
