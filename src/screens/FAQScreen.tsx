import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import FAQAccordion from "../components/FAQAccordion";

// Data
import { faqQuestions } from "../DummyData";

interface FAQScreenProps {
  isDesktop: boolean;
}

const Container = styled.div<FAQScreenProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isDesktop ? "736px" : "calc(100% - 32px)")};
  ${(props) => !props.isDesktop && "margin: 0 16px;"}
  margin-bottom: 40px;
  ${(props) => props.isDesktop && "align-self: center;"}
`;

const Title = styled.h3<FAQScreenProps>`
  font-weight: 700;
  font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
  line-height: ${(props) => (props.isDesktop ? "32px" : "28px")};
  margin: 0;
  margin-bottom: 8px;
  ${(props) => props.isDesktop && "text-align: center;"}
`;

const FAQScreen: React.FC<FAQScreenProps> = ({ isDesktop }) => {
  const [expanded, setExpanded] = useState<Array<boolean>>([
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (isDesktop) {
      setExpanded([true, false, false, false]);
    } else {
      setExpanded([true, true, true, true]);
    }
  }, [isDesktop]);

  const handleChange = (id: number) => () => {
    setExpanded((oldArray) => {
      const arrayCopy = JSON.parse(JSON.stringify(oldArray));
      arrayCopy[id] = !oldArray[id];
      return arrayCopy;
    });
  };
  return (
    <Container isDesktop={isDesktop}>
      <Title isDesktop={isDesktop}>Frequently Asked Questions</Title>
      {faqQuestions.map((question) => (
        <FAQAccordion
          title={question.title}
          content={question.content}
          id={question.id}
          key={question.id.toString()}
          isExpanded={expanded[question.id]}
          handleChange={handleChange}
        />
      ))}
    </Container>
  );
};

export default FAQScreen;
