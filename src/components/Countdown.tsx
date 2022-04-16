import React from "react";

// Hooks
import { useCountdown } from "../hooks/useCountdown";

interface CountdownProps {
  targetDate: string;
  style: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, style }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <span className={style}>
      {hours}:{minutes}:{seconds}
    </span>
  );
};

export default Countdown;
