import styles from "./SandwichButton.module.scss"
import clsx from "clsx";
import Image from "next/image";

export const SandwichButton = ({onClick}: {onClick: () => void}) => {
    return (
        <button className={clsx(styles.main, "d-md-none")} onClick={onClick}>
            <Image
                src={'img/icon _bars_.svg'}
                alt={'glob'}
                height={22}
                width={22}
                draggable={false}
            />
        </button>
    )
}
