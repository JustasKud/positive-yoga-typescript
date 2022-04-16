import { useEffect, useState } from "react";

const getReturnValues = (countdown: number): string[] => {
  const hours = Math.floor(countdown / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  const Number = Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
  });

  return [Number.format(hours), Number.format(minutes), Number.format(seconds)];
};

const useCountdown = (targetDate: string): string[] => {
  const countdownDate = new Date(targetDate).getTime();

  const [countdown, setCountdown] = useState(
    countdownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownDate]);

  return getReturnValues(countdown);
};

export { useCountdown };
