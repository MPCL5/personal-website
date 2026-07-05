import styles from './Image.module.scss'
import Image from "next/image";

export const BioSectionImage = () => {
    return <Image
        src="/img/new_pic.jpg"
        alt="masoud"
        className={styles.main}
        height={383}
        width={383}
        layout={"responsive"}
    />
}
