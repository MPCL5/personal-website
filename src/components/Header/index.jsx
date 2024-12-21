"use client"

import {Logo} from "@/components/Header/Logo";
import {NavigationBar} from "@/components/Header/NavigationBar";
import styles from './index.module.scss'
import clsx from "clsx";
import {SandwichButton} from "./SandwichButton";
import {MobileSlider} from "./MobileSlider";
import {useState} from "react";

export const Header = () => {
    const [isNavOpen, setIsNaveOpen] = useState(false)

    return <header className={clsx("container d-flex justify-content-md-between align-items-center", styles.main)}>
        <SandwichButton onClick={() => setIsNaveOpen(perv => !perv)}/>
        <MobileSlider enabled={isNavOpen} onClick={() => setIsNaveOpen(perv => !perv)} />
        <Logo/>
        <NavigationBar/>
        {/*<GitButton/>*/}
    </header>;
};
