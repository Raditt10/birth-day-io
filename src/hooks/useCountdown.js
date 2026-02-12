import { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../utils/dateHelpers';

export const useCountdown = (day, month) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(day, month));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(day, month));
    }, 1000);

    return () => clearInterval(timer);
  }, [day, month]);

  return timeLeft;
};