'use client';

import styles from './index.module.scss'
import {ISidebarData, TableSidebar} from "@/components/Common/Table/Sidebar";
import {TablePresentation} from "@/components/Common/Table/Presentation";
import {ReactNode, useState} from "react";
import clsx from "clsx";
import {TableMobileHeadBar} from "@/components/Common/Table/MobileHeadBar";

export interface ITableData {
    id: string;
    title: string;
    text: ReactNode;
}


export const Table = ({data}: { data: ITableData[] }) => {
    const [active, setActive] = useState<ITableData | undefined>(data[0])
    const sidebarData: ISidebarData[] = data.map(item => ({id: item.id, value: item.title}))


    return (
        <div className={clsx("row", styles.main)}>
            <TableMobileHeadBar
                data={sidebarData}
                active={active?.id}
                onClick={(key) => setActive(data.find(item => item.id == key))}
            />
            <TableSidebar
                data={sidebarData}
                active={active?.id}
                onClick={(key) => setActive(data.find(item => item.id == key))}
            />
            <TablePresentation text={active?.text}/>
        </div>
    )
}
