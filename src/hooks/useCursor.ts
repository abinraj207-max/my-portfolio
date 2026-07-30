import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

const useCursor = (): CursorPosition => {
  const [cursor, setCursor] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return cursor;
};

export default useCursor;