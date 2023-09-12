import styles from './Text.module.scss'
import {Fira_Mono} from "next/font/google";
import clsx from "clsx";
import {ArrowButton} from "@/components/Common/ArrowButton";
import Link from "next/link";

const mono = Fira_Mono({weight: "400", subsets: ['latin']});

export const BioSectionText = () => {
    return (
        <div className={clsx(styles.main, mono.className)}>
            <span>Welcome!</span>
            <h1 className={styles.header}>I’m <span className="text-primary">Masoud</span> <br/> Poorghaffar Aghdam</h1>
            <p className={styles.text}>
                I am a Software Engineer. <br/>
                Currently, I am a graduate student at <span className="text-primary">Bilkent University</span>. <br/>
                I am adventuring the realm of Artificial Intelligence from <br/> Biology perspective. <br/>
                I think, I can develop both myself and our world :”) <br/>
            </p>
            <Link href="/blog" className="text-decoration-none">
                <ArrowButton className={styles.button}>My personal thoughts</ArrowButton>
            </Link>
        </div>
    )
}
