import React from "react";
import styled from "styled-components";

import GreenCheckmark from "../assets/img/green-checkmark.svg";

// Data
import { programPositives } from "../DummyData";

interface ProgramPositivesProps {
  isDesktop: boolean;
}

const Container = styled.div<ProgramPositivesProps>`
  display: flex;
  flex-direction: column;
  ${(props) => props.isDesktop && "width: 351px;"}
  ${(props) => !props.isDesktop && "order: 1;"}
`;

const Title = styled.h3<ProgramPositivesProps>`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
  line-height: ${(props) => (props.isDesktop ? "32px" : "28px")};
`;

const List = styled.ul`
  margin: 0;
  padding-left: 0px;
  list-style-type: none;
`;

const ListItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-left: 38px;
  color: #424242;
  background-image: url(${GreenCheckmark});
  background-repeat: no-repeat;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const ProgramPositives: React.FC<ProgramPositivesProps> = ({ isDesktop }) => {
  return (
    <Container isDesktop={isDesktop}>
      <Title isDesktop={isDesktop}>Is Positive Yoga right for me?</Title>
      {/* https://www.w3schools.com/cssref/pr_list-style-image.asp */}
      <List>
        {programPositives.map((content) => (
          <ListItem key={content.key}>
            <span>{content.content}</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProgramPositives;
