'use client';

import styles from './index.module.scss'
import React, {ClassAttributes} from "react";


export const Button = ({
                           children,
                           ...props
                       }: ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return <button className={styles.main} {...props}>{children}</button>
}
