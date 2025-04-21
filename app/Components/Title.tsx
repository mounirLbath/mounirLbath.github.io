import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  paddingBottom?: boolean;
}

const Title = ({
  children = "",
  className = "",
  paddingBottom = true,
}: Props) => {
  return (
    <h1
      className={
        "text-3xl font-mono pt-10 " +
        (paddingBottom ? "pb-10 " : "") +
        className
      }
    >
      {children}
    </h1>
  );
};

export default Title;
