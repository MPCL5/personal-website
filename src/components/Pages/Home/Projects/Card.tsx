import styles from './Card.module.scss'
import clsx from "clsx";
import {Button} from "@/components/Common/Button";
import Link from "next/link";

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
        throw new Error("Something went wrong while fetching data from github")
    }

    const data = await response.json() as IGitResponse;
    return data.stargazers_count;
}

export const ProjectCard = async ({data}: { data: IProjectCardData }) => {
    const starCount = await getStarCount(data.link);

    return (
        <div className={clsx(styles.main, 'row')}>
            <div className={'col-9'}>
                <h3>{data.title}</h3>
                <div>{data.description}</div>
                <div className={'d-flex'}>
                    <div>PyTorch</div>
                    <div>{data.date}</div>
                    <div>star: {starCount}</div>
                </div>
            </div>
            <div className={'col-3'}>
                <Link href={`https://github.com/${data.link}`} target={'_blank'}>
                    <Button>Visit</Button>
                </Link>
            </div>
        </div>
    )
}
