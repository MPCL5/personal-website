import styles from './index.module.scss'
import clsx from "clsx";
import Image from "next/image";

export const Footer = () => {
    return <footer className={clsx(styles.main, 'container flex-column flex-md-row')}>
        <div>
            Every thing is temporary for human, even limitations. <br/>
            BTW, we are done for now.
        </div>
        <Image
            height={50}
            width={100}
            src={'/img/footer-logo.svg'}
            alt={'footer'}
            priority={true}
            draggable={false}
        />
    </footer>;
};
