// src/lib/email.ts

const EMAIL = "abinraj.dev@gmail.com";

export const sendEmail = () => {
  window.location.href = `mailto:${EMAIL}`;
};

export const composeEmail = (
  subject: string,
  body: string
) => {
  const url = `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = url;
};