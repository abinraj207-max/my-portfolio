import Button from "../Button";

const MagneticButton = (props) => {
  return (
    <Button
      {...props}
      className={`${props.className || ""} transition-transform duration-300 hover:scale-105`}
    />
  );
};

export default MagneticButton;