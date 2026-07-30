// src/lib/utils.ts

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat().format(num);
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};