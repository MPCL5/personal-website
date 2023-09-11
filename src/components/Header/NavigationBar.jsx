'use client'

import styles from './NavigationBar.module.scss'
import Link from 'next/link'
import {Fira_Mono} from "next/font/google";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {NAVIGATION_ITEMS} from "../../constants/navigation";

const mono = Fira_Mono({weight: "400", subsets: ['latin']});

export const NavigationBar = () => {
    const pathname = usePathname();

    return <ul className={`${mono.className} ${styles.main}`}>
        {NAVIGATION_ITEMS.map(item => (
            <li key={item.path} className={clsx(item.path === pathname && styles.active)}>
                <Link href={item.path}>{item.label}</Link>
            </li>
        ))}
    </ul>
}
