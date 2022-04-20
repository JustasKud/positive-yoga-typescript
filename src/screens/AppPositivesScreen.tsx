import React from "react";
import styled from "styled-components";

// Components
import Phones from "../components/Phones";
import ProgramPositives from "../components/ProgramPositives";

interface AppPositivesScreenProps {
  isDesktop: boolean;
}

const Container = styled.div<AppPositivesScreenProps>`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  align-self: center;
  width: ${(props) => (props.isDesktop ? "734px" : "calc(100% - 32px)")};
  margin-top: ${(props) => (props.isDesktop ? "40px" : "32px")};
  margin-bottom: ${(props) =>
    props.isDesktop ? "48px" : "max(48px, calc(100vw - 375px + 48px))"};
  ${(props) => props.isDesktop && "justify-content: space-between;"}
`;

const AppPositivesScreen: React.FC<AppPositivesScreenProps> = ({
  isDesktop,
}) => {
  return (
    <Container isDesktop={isDesktop}>
      <Phones isDesktop={isDesktop} />
      <ProgramPositives isDesktop={isDesktop} />
    </Container>
  );
};

export default AppPositivesScreen;
