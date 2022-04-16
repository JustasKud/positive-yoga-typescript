import React from "react";

// Components
import PriceTagIcon from "../assets/PriceTagIcon";
import Countdown from "./Countdown";

// Styles
import styles from "./StickyDiscount.module.css";

const StickyDiscount: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <PriceTagIcon />
      </span>
      <span className={styles.semiBold}>50%</span>
      <span>&nbsp;discount only valid for&nbsp;</span>
      <Countdown style={styles.semiBold} targetDate="2022-04-17" />
    </div>
  );
};

export default StickyDiscount;
