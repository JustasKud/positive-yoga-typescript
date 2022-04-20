import React from "react";
import styled from "styled-components";

interface TitleProps {
  isDesktop: boolean;
}

const Container = styled.div<TitleProps>`
  width: ${(props) => (props.isDesktop ? "100%" : "calc(100% - 32px)")};
  ${(props) => props.isDesktop && "text-align: center;"}
  ${(props) => props.isDesktop && "margin-top: 48px;"}
  ${(props) => props.isDesktop && "margin-bottom: 32px;"}
  ${(props) => !props.isDesktop && "margin: 16px 16px 24px 16px;"}
`;

const Paragraph = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 8px;
`;

const Heading = styled.h1<TitleProps>`
  font-size: ${(props) => (props.isDesktop ? "40px" : "28px")};
  margin: 0;
`;

const Title: React.FC<TitleProps> = ({ isDesktop }) => {
  return (
    <Container isDesktop={isDesktop}>
      <Paragraph>
        Over <strong>52 147</strong> plans ordered.
      </Paragraph>
      <Heading isDesktop={isDesktop}>
        Get access to your yoga program now!
      </Heading>
    </Container>
  );
};

export default Title;
