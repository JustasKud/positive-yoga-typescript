import React from "react";

// Styles
import styles from "./PlanPricing.module.css";

// Svg
import CheckedIcon from "../assets/CheckedIcon";
import UncheckedIcon from "../assets/UncheckedIcon";

interface PlanPricingProps {
  months: number;
  price: number;
  promotion: boolean;
  selected: boolean;
  onClick: () => void;
}

const PlanPricing: React.FC<PlanPricingProps> = ({
  months,
  price,
  promotion,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`${styles.container} ${
        selected ? styles.orangeBorder : styles.greyBorder
      }`}
      onClick={onClick}
      aria-hidden="true"
    >
      <div className={styles.title}>
        <span>{months} month plan</span>
        {promotion && <span className={styles.promotion}>Save 50%</span>}
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.price}>${price}</span>
        <span className={styles.month}>/month</span>
        {selected ? <CheckedIcon color="#FF9B4E" /> : <UncheckedIcon />}
      </div>
      {months > 1 ? (
        <div className={styles.billing}>
          <span className={styles.fullPrice}>${19.99 * months}</span>
          <strong className={styles.orange}>${price * months}</strong>
          <span>&nbsp;billed every {months} months</span>
        </div>
      ) : (
        <div className={styles.billing}>Billed monthly</div>
      )}
    </div>
  );
};

export default PlanPricing;
