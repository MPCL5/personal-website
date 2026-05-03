import styles from "./index.module.scss"
import Image from "next/image";
import {RESEARCH_INTERESTS} from "@/constants/researchInterests";
import {ResearchInterestItem} from "@/components/Pages/Home/Interests/Interest";


export const HomeResearchInterestsSection = () => {
    return (
        <section className={styles.main}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <h2 className={styles.title}>Research Interests</h2>
                        <p className={styles.brief}>
                            TBH, I like to explore everything related to computers!<br />
                            Currently, I’m particularly interested in:
                        </p>
                        <div>
                            {RESEARCH_INTERESTS.map(item => <ResearchInterestItem text={item} key={item}/>)}
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <Image
                            src="/img/research-interests-illu.svg"
                            alt="research"
                            height={359}
                            width={448}
                            draggable={false}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
