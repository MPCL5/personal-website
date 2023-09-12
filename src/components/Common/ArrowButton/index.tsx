import styles from './index.module.scss'
import React, {ClassAttributes} from 'react';
import Image from "next/image";
import {Fira_Mono} from "next/font/google";
import clsx from "clsx";

const mono = Fira_Mono({weight: "400", subsets: ['latin']});

export const ArrowButton = ({
                                children,
                                className,
                                ...props
                            }: ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button className={clsx(styles.main, mono, className)} {...props}>
        <div>{children}</div>
        <Image
            src="/img/Arrow 1.svg"
            alt="expand"
            priority={true}
            width={30}
            height={8}
            className={styles.image}
        />
    </button>
}
