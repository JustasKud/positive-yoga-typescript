import React, { useState, useEffect } from "react";

// Components
import LogoBanner from "./components/LogoBanner";
import StickyDiscount from "./components/StickyDiscount";
import Title from "./components/Title";
import Button from "./components/Button";

// Screens
import PlansAndProgramScreen from "./screens/PlansAndProgramScreen";
import SuccessStoriesScreen from "./screens/SuccessStoriesScreen";
import AppPositivesScreen from "./screens/AppPositivesScreen";
import FAQScreen from "./screens/FAQScreen";

// Style
import "./App.css";
import styles from "./App.module.css";

const App: React.FC = () => {
  // Initial window size check
  const [isDesktop, setDesktop] = useState<boolean>(window.innerWidth > 1010);

  // Update window size
  const updateMedia = (): void => {
    setDesktop(window.innerWidth > 1010);
  };

  // Check for window size changes
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">
      <StickyDiscount />
      <LogoBanner isDesktop={isDesktop} />
      <Title isDesktop={isDesktop} />
      <PlansAndProgramScreen isDesktop={isDesktop} />
      <SuccessStoriesScreen isDesktop={isDesktop} />
      <Button text="Get my plan" isDesktop={isDesktop} />
      <AppPositivesScreen isDesktop={isDesktop} />
      <FAQScreen isDesktop={isDesktop} />
      <Button text="Get my plan" isDesktop={isDesktop} />
      <h2 className={isDesktop ? styles.titleDesktop : styles.titleMobile}>
        Start your yoga program today!
      </h2>
      <PlansAndProgramScreen isDesktop={isDesktop} />
    </div>
  );
};

export default App;
