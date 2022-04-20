import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  margin: 4px 0px;
  margin-left: auto;
`;

const UncheckedIcon: React.FC = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0Z"
        fill="rgba(0, 0, 0, 0.08)"
      />
    </Svg>
  );
};

export default UncheckedIcon;
