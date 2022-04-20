import React from "react";
import styled from "styled-components";

// Components
import ProgramDetails from "./ProgramDetails";

// Data
import { programContent } from "../DummyData";

interface ProgramProps {
  isDesktop: boolean;
}

const Container = styled.div<ProgramProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isDesktop ? "343px" : "calc(100vw - 32px)")};
  ${(props) => !props.isDesktop && "margin: 0 16px;"}
  ${(props) => !props.isDesktop && "margin-top: 40px;"}
`;

const Title = styled.h3<ProgramProps>`
  margin: 0;
  margin-bottom: ${(props) => (props.isDesktop ? "48px" : "24px")};
  font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
`;

const Program: React.FC<ProgramProps> = ({ isDesktop }) => {
  return (
    <Container isDesktop={isDesktop}>
      <Title isDesktop={isDesktop}>What&apos;s in my program?</Title>
      {programContent.map((content) => (
        <ProgramDetails
          image={content.image}
          title={content.title}
          description={content.description}
          key={content.key}
          isDesktop={isDesktop}
        />
      ))}
    </Container>
  );
};

export default Program;
