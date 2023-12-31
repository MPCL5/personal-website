import {Logo} from "@/components/Header/Logo";
import {GitButton} from "@/components/Header/GitButton";
import {NavigationBar} from "@/components/Header/NavigationBar";
import styles from './index.module.scss'
import clsx from "clsx";

export const Header = () => {
    return <header className={clsx("container d-flex justify-content-between align-items-center", styles.main)}>
        <Logo/>
        <NavigationBar/>
        <GitButton/>
    </header>;
};
