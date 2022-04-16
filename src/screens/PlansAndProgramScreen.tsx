import React from "react";

// Components
import Plans from "../components/Plans";
import Program from "../components/Program";

// Style
import styles from "./PlansAndProgramScreen.module.css";

interface PlansAndProgramScreenProps {
  isDesktop: boolean;
}

const PlansAndProgramScreen: React.FC<PlansAndProgramScreenProps> = ({
  isDesktop,
}) => {
  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <Plans isDesktop={isDesktop} />
      <Program isDesktop={isDesktop} />
    </div>
  );
};

export default PlansAndProgramScreen;
