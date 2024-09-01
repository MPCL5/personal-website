import styles from "./SocialItem.module.scss"
import Image from "next/image";
import Link from "next/link";

export interface ISocialItemData {
    name: string;
    link: string;
    linkRepr: string;
    iconPath: string;
}

export const SocialItem = ({data}: { data: ISocialItemData }) => {
    return (
        <Link href={data.link} className={styles.main} target={"_blank"} prefetch={false}>
            <div className={styles.icon}>
                <Image src={data.iconPath} alt={data.name} height={36} width={36}/>
            </div>
            <div className={styles.itemContainer}>
                <h2>{data.name}</h2>
                <div>{data.linkRepr}</div>
            </div>
        </Link>
    )
}
