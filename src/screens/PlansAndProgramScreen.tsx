import React from "react";
import styled from "styled-components";

// Components
import Plans from "../components/Plans";
import Program from "../components/Program";

interface PlansAndProgramScreenProps {
  isDesktop: boolean;
}

const Container = styled.div<PlansAndProgramScreenProps>`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  margin-bottom: ${(props) => (props.isDesktop ? "48px" : "40px")};
  ${(props) => props.isDesktop && "align-self: center;"}
  ${(props) => props.isDesktop && "justify-content: space-between;"}
  ${(props) => props.isDesktop && "width: 729px;"}
`;

const PlansAndProgramScreen: React.FC<PlansAndProgramScreenProps> = ({
  isDesktop,
}) => {
  return (
    <Container isDesktop={isDesktop}>
      <Plans isDesktop={isDesktop} />
      <Program isDesktop={isDesktop} />
    </Container>
  );
};

export default PlansAndProgramScreen;
