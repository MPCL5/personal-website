'use client'
import styles from './Card.module.scss'
import {useEffect, useState} from "react";
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

export const ProjectCard = ({data}: { data: IProjectCardData }) => {
    const [starCount, setStarCount] = useState<number | null>(null)

    // TODO: fix this ana fetch them in serverside.
    useEffect(() => {
        // Let's do not comply with clean code rules. I am tired rn.
        fetch(`https://api.github.com/repos/${data.link}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong while fetching data from github')
                }

                return response.json() as Promise<IGitResponse>
            })
            .then(data => {
                setStarCount(data.stargazers_count)
            })
            .catch((err: Error) => {
                console.log(err.message)
            })

    }, [data.link])

    return (
        <div className={clsx(styles.main, 'row')}>
            <div className={'col-9'}>
                <h3>{data.title}</h3>
                <div>{data.description}</div>
                <div className={'d-flex'}>
                    <div>PyTorch</div>
                    <div>{data.date}</div>
                    <div>{starCount}</div>
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
