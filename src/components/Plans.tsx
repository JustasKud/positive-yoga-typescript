import React, { useState } from "react";
import styled from "styled-components";

// Components
import PlanPricing from "./PlanPricing";
import Button from "./Button";

// Data
import { pricing } from "../DummyData";

// Images
import SafeCheckoutImage from "../assets/img/SafeCheckout.png";

interface PlansProps {
  isDesktop: boolean;
}

const Container = styled.div<PlansProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isDesktop ? "352px" : "calc(100vw - 32px)")};
  ${(props) => !props.isDesktop && "margin: 0 16px;"}
`;

const Title = styled.h3<PlansProps>`
  margin: 0 0 16px 0;
  font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
`;

const HighlightSpan = styled.span`
  color: #ff9b4e;
`;

const Caption = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 8px 0;
`;

const ImageContainer = styled.div`
  height: 54px;
  width: auto;
  margin-top: 8px;
  align-self: center;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Plans: React.FC<PlansProps> = ({ isDesktop }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <Container isDesktop={isDesktop}>
      <Title isDesktop={isDesktop}>
        Choose your plan and get{" "}
        <HighlightSpan>7 days free trial</HighlightSpan>
      </Title>

      {pricing.map((plan) => (
        <PlanPricing
          months={plan.months}
          price={plan.price}
          promotion={plan.promotion}
          selected={selectedIndex === plan.index}
          onClick={() => setSelectedIndex(plan.index)}
          key={plan.index.toString()}
        />
      ))}

      <Button text="Get your plan" isDesktop={isDesktop} />
      {isDesktop ? (
        <Caption>
          Your free trial will automatically become a paid subscription on the
          8th day after you begin your trial. To cancel your subscription,
          please contact us at least 24 hours before the end of the trial
          period.
        </Caption>
      ) : (
        <Caption>
          After 7 days free trial subscription payment is automatically charged
          from your account unless it is canceled at least 24 hours before the
          end of the trial period.
        </Caption>
      )}
      <Caption>
        By choosing a payment method you agree to the{" "}
        <Anchor href="#top">T&Cs</Anchor> and{" "}
        <Anchor href="#top">Privacy Policy</Anchor>
      </Caption>
      <ImageContainer>
        <img src={SafeCheckoutImage} alt="safe checkout" />
      </ImageContainer>
    </Container>
  );
};

export default Plans;
