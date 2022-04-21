import React from "react";
import styled from "styled-components";

// Components
import PriceTagIcon from "../assets/PriceTagIcon";
import Countdown from "./Countdown";

const Container = styled.div`
  height: 56px;
  position: sticky;
  top: 0;
  background: #90caf9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
`;

const Icon = styled.span`
  padding: 0px 18px 0px 0px;
`;

const SemiBold = styled.span`
  font-weight: 600;
`;

const StickyDiscount: React.FC = () => {
  return (
    <Container>
      <Icon>
        <PriceTagIcon />
      </Icon>
      <SemiBold>50%</SemiBold>
      <span>&nbsp;discount only valid for&nbsp;</span>
      <Countdown targetDate="2022-05-17" />
    </Container>
  );
};

export default StickyDiscount;
