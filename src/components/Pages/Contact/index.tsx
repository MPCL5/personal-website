import clsx from "clsx";
import styles from "./index.module.scss"
import Image from "next/image";
import {CONTACT_INFO} from "@/constants/contact";
import {SocialItem} from "@/components/Pages/Contact/SocialItem";

export const ContactPage = () => {
    return (
        <section className={clsx("container", styles.main)}>
            <div className={"row g-0"}>
                <div className={"col-12 col-md-7"}>
                    <Image
                        src={"/img/contact.svg"}
                        alt={"contact"}
                        height={586}
                        width={590}
                        layout={"responsive"}
                    />
                </div>
                <div className={"col-12 col-md-5 d-flex flex-column justify-content-center"}>
                    {CONTACT_INFO.map(item => <SocialItem data={item} key={item.name}/>)}
                    <div className={styles.texture}>
                        <Image src={"/img/Group.svg"} alt={"a photo"} draggable={false} width={365} height={342}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
