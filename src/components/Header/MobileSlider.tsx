import styles from "./MobileSlider.module.scss"
import {NavigationBar} from "@/components/Header/NavigationBar";
import {SandwichButton} from "@/components/Header/SandwichButton";
import {Logo} from "@/components/Header/Logo";
import clsx from "clsx";

export const MobileSlider = ({enabled = true, onClick}: { enabled: boolean, onClick: () => void }) => {
    return (
        <div className={clsx(styles.main, {[styles.open]: enabled})}>
            <div className={styles.container}>
                <div className={"d-flex align-items-center mb-3"}>
                    <SandwichButton onClick={onClick}/>
                    <Logo/>
                </div>
                <NavigationBar isDesktop={false} onClick={onClick}/>
            </div>
            <div className={styles.transArea} onClick={onClick}/>
        </div>
    )
}
