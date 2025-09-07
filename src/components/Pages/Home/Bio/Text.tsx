import styles from './Text.module.scss'
import {Fira_Mono} from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/Common/Button";

const mono = Fira_Mono({weight: "400", subsets: ['latin']});

export const BioSectionText = () => {
    return (
        <div className={clsx(styles.main, mono.className)}>
            <span>Hello and Welcome!</span>
            <h1 className={styles.header}>I’m <span className="text-primary">Masoud</span> <br/> Poorghaffar Aghdam</h1>
            <p className={styles.text}>
                {/* I used to be a software developer, but I quited. (why?) <br/> */}
                I am a graduate student at <span className="text-primary">Bilkent University</span>. <br/>
                My research focuses on methods and  AI tools for<br /> enhancing the way we share and use data.<br/>
                In my free time, I enjoy exploring concepts and<br /> ideas from other fields. <br />
            </p>
            {/*<Link href="https://blog.masoud.live" className="text-decoration-none">*/}
            {/*    <ArrowButton className={styles.button}>My personal thoughts</ArrowButton>*/}
            {/*</Link>*/}
            <div className={"d-flex mt-4"}>
                <Link href="https://github.com/mpcl5" target={"_blank"} className="text-decoration-none">
                    <Button>
                        <Image
                            src="/img/github.svg"
                            alt="github"
                            width={104}
                            height={26}
                            priority={true}
                        />
                    </Button>
                </Link>
                <Link href="/my_resume.pdf" target={"_blank"} className="text-decoration-none">
                    <Button className={"ms-2 d-flex align-items-center"}>
                        {/*<strong className={"me-1"}>My Resume</strong>*/}
                        <Image
                            src="/img/Resume.svg"
                            alt="github"
                            width={80}
                            height={26}
                            priority={true}
                            className={"mx-1"}
                        />
                        <Image
                        src="/img/file-user-regular.svg"
                        alt="github"
                        width={22}
                        height={22}
                        priority={true}
                    />
                    </Button>
                    {/*<ArrowButton className={"ms-2"}>My Resume</ArrowButton>*/}
                </Link>
            </div>
        </div>
    )
}
