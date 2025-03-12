import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Title = ({ children = "", className = "" }: Props) => {
  return (
    <h1 className={"text-3xl font-mono py-10 " + className}>{children}</h1>
  );
};

export default Title;
