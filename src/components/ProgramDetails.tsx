import React, { ReactElement } from "react";
import styled from "styled-components";

interface ProgramDetailsProps {
  image: ReactElement;
  title: string;
  description: string;
  isDesktop: boolean;
}

interface StyledProps {
  isDesktop: boolean;
}

const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  ${(props) => !props.isDesktop && "width: calc(100vw - 32px);"}
`;

const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 16px;
`;

const Title = styled.h5`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px;
  color: #22222c;
  opacity: 0.64;
  line-height: 18px;
`;

const ProgramDetails: React.FC<ProgramDetailsProps> = ({
  image,
  title,
  description,
  isDesktop,
}) => {
  return (
    <Container isDesktop={isDesktop}>
      {image}
      <Subcontainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Subcontainer>
    </Container>
  );
};

export default ProgramDetails;
