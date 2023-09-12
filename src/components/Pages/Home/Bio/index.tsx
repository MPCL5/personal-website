import styles from './index.module.scss'
import {BioSectionImage} from "@/components/Pages/Home/Bio/Image";
import {BioSectionText} from "@/components/Pages/Home/Bio/Text";

export const HomeBioSection = () => {
    return <section className={styles.main}>
        <div className="container">
            <div className="row">
                <div className="col-auto" >
                    <BioSectionImage />
                </div>
                <div className="col-12 col-md-auto">
                    <BioSectionText />
                </div>
            </div>
        </div>
    </section>
}
