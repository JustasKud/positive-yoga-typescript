import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

interface StyleProps {
  isDesktop: boolean;
}

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const StyledTitle = styled.h2<StyleProps>`
  align-self: center;
  margin-top: ${(props) => (props.isDesktop ? "40px" : "32px")};
  margin-bottom: ${(props) => (props.isDesktop ? "32px" : "24px")};
  font-weight: 700;
  font-size: ${(props) => (props.isDesktop ? "32px" : "24px")};
  line-height: ${(props) => (props.isDesktop ? "44px" : "32px")};
`;

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
    <AppWrapper>
      <StickyDiscount />
      <LogoBanner isDesktop={isDesktop} />
      <Title isDesktop={isDesktop} />
      <PlansAndProgramScreen isDesktop={isDesktop} />
      <SuccessStoriesScreen isDesktop={isDesktop} />
      <Button text="Get my plan" isDesktop={isDesktop} />
      <AppPositivesScreen isDesktop={isDesktop} />
      <FAQScreen isDesktop={isDesktop} />
      <Button text="Get my plan" isDesktop={isDesktop} />
      <StyledTitle isDesktop={isDesktop}>
        Start your yoga program today!
      </StyledTitle>
      <PlansAndProgramScreen isDesktop={isDesktop} />
    </AppWrapper>
  );
};

export default App;
