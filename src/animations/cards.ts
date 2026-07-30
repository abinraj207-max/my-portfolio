// src/animations/cards.ts

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const cardHover = {
  y: -8,
  scale: 1.02,
};