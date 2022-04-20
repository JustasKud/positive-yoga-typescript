import React from "react";
import styled from "styled-components";

// Images
import TwoPhones from "../assets/img/TwoPhones.png";
import Accent from "../assets/img/accent.svg";

interface PhonesProps {
  isDesktop: boolean;
}

const Container = styled.div<PhonesProps>`
  display: flex;
  flex-direction: column;
  ${(props) => props.isDesktop && "width: 351px;"}
  ${(props) => !props.isDesktop && "order: 2;"}
`;

const Title = styled.h3<PhonesProps>`
  ${(props) => !props.isDesktop && "margin-top: 40px;"}
  margin-bottom: 24px;
  font-weight: 700;
  font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
  line-height: ${(props) => (props.isDesktop ? "32px" : "28px")};
  color: #22222c;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const TwoPhonesImg = styled.img`
  width: 343px;
`;

const AccentImg = styled.img`
  position: absolute;
  top: calc(375px - 100vw);
  left: -16px;
  width: 100vw;
  z-index: -1;
`;

const Phones: React.FC<PhonesProps> = ({ isDesktop }) => {
  return (
    <Container isDesktop={isDesktop}>
      <Title isDesktop={isDesktop}>Start your yoga journey now!</Title>
      <ImgContainer>
        <TwoPhonesImg src={TwoPhones} alt="Two phones" />
        {!isDesktop && <AccentImg src={Accent} alt="Accent" />}
      </ImgContainer>
    </Container>
  );
};

export default Phones;
