import { useEffect, useState } from "react";

const useCounter = (
  end: number,
  duration: number = 2000,
  start: number = 0
): number => {
  const [count, setCount] = useState<number>(start);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;

      const percentage = Math.min(
        progress / duration,
        1
      );

      const currentValue = Math.floor(
        percentage * (end - start) + start
      );

      setCount(currentValue);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

export default useCounter;