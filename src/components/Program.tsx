import React from "react";

// Components
import ProgramDetails from "./ProgramDetails";

// Style
import styles from "./Program.module.css";

// Data
import { programContent } from "../DummyData";

interface ProgramProps {
  isDesktop: boolean;
}

const Program: React.FC<ProgramProps> = ({ isDesktop }) => {
  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <h3 className={isDesktop ? styles.titleDesktop : styles.titleMobile}>
        What&apos;s in my program?
      </h3>
      {programContent.map((content) => (
        <ProgramDetails
          image={content.image}
          title={content.title}
          description={content.description}
          key={content.key}
          isDesktop={isDesktop}
        />
      ))}
    </div>
  );
};

export default Program;
