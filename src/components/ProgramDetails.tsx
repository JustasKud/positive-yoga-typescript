import React, { ReactElement } from "react";

// Style
import styles from "./ProgramDetails.module.css";

interface ProgramDetailsProps {
  image: ReactElement;
  title: string;
  description: string;
  isDesktop: boolean;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({
  image,
  title,
  description,
  isDesktop,
}) => {
  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      {image}
      <div className={styles.subcontainer}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProgramDetails;
