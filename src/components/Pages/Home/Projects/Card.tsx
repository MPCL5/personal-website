import styles from './Card.module.scss'
import {Button} from "@/components/Common/Button";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export interface IProjectCardData {
    title: string;
    description: string;
    date: string;
    link: string;
}

interface IGitResponse {
    stargazers_count: number,
}

async function getStarCount(repo_link: string): Promise<number> {
    const response = await fetch(`https://api.github.com/repos/${repo_link}`)
    if (!response.ok) {
        return NaN;
        // throw new Error("Something went wrong while fetching data from github")
    }

    const data = await response.json() as IGitResponse;
    return data.stargazers_count;
}

export const ProjectCard = async ({data}: { data: IProjectCardData }) => {
    const starCount = await getStarCount(data.link);

    return (
        <div className={styles.main}>
            <div className={'d-flex justify-content-between align-items-center mb-2 mb-md-3'}>
                <h3 className={styles.title}>{data.title}</h3>
                <Link href={`https://github.com/${data.link}`} target={'_blank'}>
                    <Button className={styles.button}>
                        <span>Visit</span>
                        <Image
                            src={'img/icon_globe.svg'}
                            alt={'glob'}
                            height={18}
                            width={18}
                            draggable={false}
                        />
                    </Button>
                </Link>
            </div>
            <p className={styles.descript}>{data.description}</p>
            <div className={clsx('d-flex', styles.details)}>
                <div>PyTorch</div>
                <div className={'mx-3 d-inline-flex justify-content-center'}>
                    <Image
                        src={'/img/calender.svg'}
                        alt={'star'}
                        height={12}
                        width={12}
                        draggable={false}
                        className={'me-2'}
                    />
                    {data.date}
                </div>
                <div className={'d-inline-flex justify-content-center'}>
                    <Image
                        src={'/img/star.svg'}
                        alt={'star'}
                        height={12}
                        width={12}
                        draggable={false}
                        className={'me-2'}
                    />
                    {starCount}
                </div>
            </div>
            <Button className={clsx(styles.button, styles.buttonMobile)}>
                <span>Visit</span>
                <Image
                    src={'img/icon_globe.svg'}
                    alt={'glob'}
                    height={18}
                    width={18}
                    draggable={false}
                />
            </Button>
        </div>
    )
}
