'use client';

import Image from "next/image";
import {Button} from "../Common/Button";

const GITHUB_LINK = "https://github.com/mpcl5";

export const GitButton = () => {
    const onClick = () => {
        window.open(GITHUB_LINK, '_blank')
    }

    return <>
        <link href={GITHUB_LINK} className="d-none"/>
        <Button onClick={onClick}>
            <Image
                src="/img/github.svg"
                alt="github"
                width={104}
                height={26}
                priority={true}
            />
        </Button>
    </>
}
