import styles from './index.module.scss'
import {BioSectionImage} from "@/components/Pages/Home/Bio/Image";
import {BioSectionText} from "@/components/Pages/Home/Bio/Text";
import Image from "next/image";

export const HomeBioSection = () => {
    return <section className={styles.main}>
        <div className="container">
            <div className="row position-relative">
                <div className="col-auto">
                    <BioSectionImage/>
                </div>
                <div className="col-12 col-md-auto pe-auto pe-md-0">
                    <BioSectionText/>
                </div>
                <Image src="/img/Arrow SVG.svg" alt="arrow" height={190} width={231} className={styles.arrow}/>
            </div>
        </div>
    </section>
}
