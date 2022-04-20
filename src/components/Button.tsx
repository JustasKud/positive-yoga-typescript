import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
  isDesktop: boolean;
}
interface ButtonProps {
  text: string;
  isDesktop: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  color: white;
  background: #ff9b4e;
  box-shadow: 0px 16px 32px rgba(255, 155, 78, 0.24);
  border: none;
  border-radius: 8px;
  height: 56px;
  width: ${(props) => (props.isDesktop ? "352px" : "calc(100vw - 32px)")};
  padding: 16px 0px;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  font-weight: 700;
  font-size: 16px;
  margin: 8px 0;
  align-self: center;
`;

const Button: React.FC<ButtonProps> = ({ text, isDesktop }) => {
  return (
    <StyledButton type="button" isDesktop={isDesktop}>
      {text}
    </StyledButton>
  );
};

export default Button;
