import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children = "",
  onClick = () => {},
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={className + " cursor-pointer hover:text-blue-500"}
    >
      {children}
    </button>
  );
};

export default Button;
