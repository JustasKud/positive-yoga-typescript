import React from "react";

// Style
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  isDesktop: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isDesktop }) => {
  return (
    <button
      className={isDesktop ? styles.buttonDesktop : styles.buttonMobile}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
