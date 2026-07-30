const Badge = ({ children }) => {
  return (
    <span className="rounded-full border border-blue-500 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
      {children}
    </span>
  );
};

export default Badge;