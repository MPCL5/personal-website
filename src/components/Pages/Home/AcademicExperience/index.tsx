"use client";

import styles from "./index.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { ACADEMIC_EXPERIENCE } from "@/constants/academicExperience";
import { TerminalCommand } from "@/components/Common/TerminalCommand";
import { AcademicPanel } from "@/components/Pages/Home/AcademicExperience/Panel";
import Image from "next/image";

export const HomeAcademicExperienceSection = () => {
  const [active, setActive] = useState(ACADEMIC_EXPERIENCE[0].term);
  const activeEntry =
    ACADEMIC_EXPERIENCE.find((entry) => entry.term === active) ??
    ACADEMIC_EXPERIENCE[0];

  return (
    <section className={clsx(styles.main, "container")}>
      {/* <Image
        src="/img/academix experience.svg"
        alt=""
        aria-hidden
        height={359}
        width={448}
        draggable={false}
        className={styles.image}
      /> */}
      <h2 className={styles.title}>Academic Experience</h2>
      <TerminalCommand command="history | grep academia" />
      <div className={styles.grid}>
        <div className={styles.tabs} role="tablist" aria-label="Academic terms">
          {ACADEMIC_EXPERIENCE.map((entry) => (
            <button
              key={entry.term}
              type="button"
              role="tab"
              aria-selected={entry.term === active}
              className={clsx(styles.tab, {
                [styles.tabActive]: entry.term === active,
              })}
              onClick={() => setActive(entry.term)}
            >
              {entry.term}
            </button>
          ))}
        </div>
        <div className={styles.panel} role="tabpanel">
          <AcademicPanel {...activeEntry} />
        </div>
      </div>
    </section>
  );
};
