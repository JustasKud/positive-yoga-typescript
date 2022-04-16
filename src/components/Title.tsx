import React from "react";

// Style
import styles from "./Title.module.css";

interface TitleProps {
  isDesktop: boolean;
}

const Title: React.FC<TitleProps> = ({ isDesktop }) => {
  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <p
        className={isDesktop ? styles.paragraphDesktop : styles.paragraphMobile}
      >
        Over <strong>52 147</strong> plans ordered.
      </p>
      <h1 className={isDesktop ? styles.headingDesktop : styles.headingMobile}>
        Get access to your yoga program now!
      </h1>
    </div>
  );
};

export default Title;
