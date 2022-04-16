import React from "react";

// Style
import styles from "./Phones.module.css";

// Images
import TwoPhones from "../assets/img/TwoPhones.png";
import Accent from "../assets/img/accent.svg";

interface PhonesProps {
  isDesktop: boolean;
}

const Phones: React.FC<PhonesProps> = ({ isDesktop }) => {
  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <h3 className={isDesktop ? styles.titleDesktop : styles.titleMobile}>
        Start your yoga journey now!
      </h3>
      <div className={styles.imgContainer}>
        <img src={TwoPhones} alt="Two phones" className={styles.image} />
        {!isDesktop && (
          <img src={Accent} alt="Accent" className={styles.accent} />
        )}
      </div>
    </div>
  );
};

export default Phones;
