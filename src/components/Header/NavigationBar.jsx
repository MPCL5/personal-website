'use client'

import styles from './NavigationBar.module.scss'
import Link from 'next/link'
import {Fira_Mono} from "next/font/google";
import clsx from "clsx";
import {usePathname} from "next/navigation";

const mono = Fira_Mono({weight: "400", subsets: ['latin']});

const NavigationItems = [
    {label: '/Home', path: '/'},
    {label: '/Contact', path: '/contact'},
    {label: '/Blog', path: '/blog'},
    {label: '/Publications', path: '/publications'},
]

export const NavigationBar = () => {
    const pathname = usePathname();

    return <ul className={`${mono.className} ${styles.main}`}>
        {NavigationItems.map(item => (
            <li key={item.path} className={clsx(item.path === pathname && styles.active)}>
                <Link href={item.path}>{item.label}</Link>
            </li>
        ))}
    </ul>
}
