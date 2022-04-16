import React, { useState } from "react";

// Components
import PlanPricing from "./PlanPricing";
import Button from "./Button";

// Style
import styles from "./Plans.module.css";

// Data
import { pricing } from "../DummyData";

// Images
import SafeCheckoutImage from "../assets/img/SafeCheckout.png";

interface PlansProps {
  isDesktop: boolean;
}

const Plans: React.FC<PlansProps> = ({ isDesktop }) => {
  // Determine which price option is enabled
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <h3 className={isDesktop ? styles.titleDesktop : styles.titleMobile}>
        Choose your plan and get{" "}
        <span className={styles.orange}>7 days free trial</span>
      </h3>

      {/* Pricing options */}
      {pricing.map((plan) => (
        <PlanPricing
          months={plan.months}
          price={plan.price}
          promotion={plan.promotion}
          selected={selectedIndex === plan.index}
          onClick={() => setSelectedIndex(plan.index)}
          key={plan.index.toString()}
        />
      ))}

      <Button text="Get your plan" isDesktop={isDesktop} />
      {isDesktop ? (
        <p className={styles.caption}>
          Your free trial will automatically become a paid subscription on the
          8th day after you begin your trial. To cancel your subscription,
          please contact us at least 24 hours before the end of the trial
          period.
        </p>
      ) : (
        <p className={styles.caption}>
          After 7 days free trial subscription payment is automatically charged
          from your account unless it is canceled at least 24 hours before the
          end of the trial period.
        </p>
      )}
      <p className={styles.caption}>
        By choosing a payment method you agree to the{" "}
        <a href="#top" className={styles.anchor}>
          T&Cs
        </a>{" "}
        and{" "}
        <a href="#top" className={styles.anchor}>
          Privacy Policy
        </a>
      </p>
      <div className={styles.image}>
        <img src={SafeCheckoutImage} alt="safe checkout" />
      </div>
    </div>
  );
};

export default Plans;
