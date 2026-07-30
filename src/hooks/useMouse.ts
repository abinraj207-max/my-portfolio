import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const useMouse = (): MousePosition => {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return mouse;
};

export default useMouse;