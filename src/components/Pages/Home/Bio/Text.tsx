import styles from './Text.module.scss'
import {Fira_Mono} from "next/font/google";
import clsx from "clsx";
import {ArrowButton} from "@/components/Common/ArrowButton";
import Link from "next/link";

const mono = Fira_Mono({weight: "400", subsets: ['latin']});

export const BioSectionText = () => {
    return (
        <div className={clsx(styles.main, mono.className)}>
            <span>Hello and Welcome!</span>
            <h1 className={styles.header}>I’m <span className="text-primary">Masoud</span> <br/> Poorghaffar Aghdam</h1>
            <p className={styles.text}>
                I used to be a software developer, but I quited. (why?) <br/>
                Currently, I am a graduate student at <span className="text-primary">Bilkent University</span>. <br/>
                I am trying to build  AI based tools for biologist. (trying to save lives) <br/>
                Additionally, I have endeavours to enhance the privacy of people. <br/>
                I think, I can develop lots of stuff including myself. <br/>
            </p>
            <Link href="https://blog.masoud.live" className="text-decoration-none">
                <ArrowButton className={styles.button}>My personal thoughts</ArrowButton>
            </Link>
        </div>
    )
}
