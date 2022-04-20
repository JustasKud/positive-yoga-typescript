import React from "react";
import styled from "styled-components";

// Hooks
import { useCountdown } from "../hooks/useCountdown";

interface CountdownProps {
  targetDate: string;
}

const SemiBold = styled.span`
  font-weight: 600;
`;

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <SemiBold>
      {hours}:{minutes}:{seconds}
    </SemiBold>
  );
};

export default Countdown;
