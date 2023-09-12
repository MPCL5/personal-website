import styles from './Image.module.scss'
import Image from "next/image";

export const BioSectionImage = () => {
    return <Image
        src="/img/MyPic.png"
        alt="masoud"
        className={styles.main}
        height={383}
        width={383}
    />
}
