import styles from "./index.module.scss";
import Image from "next/image";
import { RESEARCH_INTERESTS } from "@/constants/researchInterests";
import { ResearchInterestItem } from "@/components/Pages/Home/Interests/Interest";
import { TerminalCommand } from "@/components/Common/TerminalCommand";

export const HomeResearchInterestsSection = () => {
  return (
    <section className={styles.main}>
      <div className={`container ${styles.content}`}>
        <div className={styles.content}>
          <Image
            src="/img/research-interests-illu.svg"
            alt=""
            aria-hidden
            height={359}
            width={448}
            draggable={false}
            className={styles.image}
          />
          <h2 className={styles.title}>Research Interests</h2>
          <TerminalCommand
            command="cat ~/interests.txt"
            className={styles.command}
          />
          <p className={styles.brief}>
            TBH, I like to explore everything related to computers!
            <br />
            Currently, I’m particularly interested in:
          </p>
          <div className={styles.grid}>
            {RESEARCH_INTERESTS.map((item) => (
              <ResearchInterestItem {...item} key={item.number} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
