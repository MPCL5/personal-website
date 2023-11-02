'use client';

import styles from './index.module.scss'
import React, {ClassAttributes} from "react";
import clsx from "clsx";


export const Button = ({
                           children,
                           className,
                           ...props
                       }: ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return <button className={clsx(styles.main, className)} {...props}>{children}</button>
}
