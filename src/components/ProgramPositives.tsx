import React from "react";

// Style
import styles from "./ProgramPositives.module.css";

// Data
import { programPositives } from "../DummyData";

interface ProgramPositivesProps {
  isDesktop: boolean;
}

const ProgramPositives: React.FC<ProgramPositivesProps> = ({ isDesktop }) => {
  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <h3 className={isDesktop ? styles.titleDesktop : styles.titleMobile}>
        Is Positive Yoga right for me?
      </h3>
      {/* https://www.w3schools.com/cssref/pr_list-style-image.asp */}
      <ul className={styles.ul}>
        {programPositives.map((content) => (
          <li key={content.key} className={styles.list}>
            <span>{content.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramPositives;
