import React from "react";
import styled from "styled-components";

// Svg
import CheckedIcon from "../assets/CheckedIcon";
import UncheckedIcon from "../assets/UncheckedIcon";

interface PlanPricingProps {
  months: number;
  price: number;
  promotion: boolean;
  selected: boolean;
  onClick: () => void;
}

interface StyledProps {
  selected: boolean;
}

const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  padding: 16px;

  width: 100%;
  height: 120px;

  background: #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  margin-bottom: 8px;
  border: ${(props) =>
    props.selected ? "2px solid #ff9b4e" : "2px solid rgba(0, 0, 0, 0.08)"};
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.4px;

  color: #22222c;
  margin: 0px 0px 4px 0px;
`;

const Promotion = styled.span`
  margin-left: 8px;
  padding: 3px 8px;
  border-radius: 6px;
  background: #ffe082;
  font-weight: 700;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Price = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  color: #22222c;
  margin: 4px 0px;
`;

const Month = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;

  display: flex;
  align-items: flex-end;

  color: #22222c;
  margin: 4px 4px;
`;

const Billing = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #22222c;
`;

const FullPrice = styled.span`
  text-decoration: line-through;
  margin-right: 8px;
`;

const DiscountPrice = styled.strong`
  color: #ff9b4e;
`;

const PlanPricing: React.FC<PlanPricingProps> = ({
  months,
  price,
  promotion,
  selected,
  onClick,
}) => {
  return (
    <Container selected={selected} onClick={onClick} aria-hidden="true">
      <Title>
        <span>{months} month plan</span>
        {promotion && <Promotion>Save 50%</Promotion>}
      </Title>
      <PriceContainer>
        <Price>${price}</Price>
        <Month>/month</Month>
        {selected ? <CheckedIcon color="#FF9B4E" /> : <UncheckedIcon />}
      </PriceContainer>
      {months > 1 ? (
        <Billing>
          <FullPrice>${19.99 * months}</FullPrice>
          <DiscountPrice>${price * months}</DiscountPrice>
          <span>&nbsp;billed every {months} months</span>
        </Billing>
      ) : (
        <Billing>Billed monthly</Billing>
      )}
    </Container>
  );
};

export default PlanPricing;
