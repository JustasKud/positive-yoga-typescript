import React from "react";

// Components
import Phones from "../components/Phones";
import ProgramPositives from "../components/ProgramPositives";

// Style
import styles from "./AppPositivesScreen.module.css";

interface AppPositivesScreenProps {
  isDesktop: boolean;
}

const AppPositivesScreen: React.FC<AppPositivesScreenProps> = ({
  isDesktop,
}) => {
  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <Phones isDesktop={isDesktop} />
      <ProgramPositives isDesktop={isDesktop} />
    </div>
  );
};

export default AppPositivesScreen;
