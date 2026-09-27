import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  level?: 1 | 2;
}

// level 1: page title, level 2: section heading
const Title = ({ children = "", className = "", level = 2 }: Props) => {
  if (level === 1) {
    return (
      <h1 className={"text-3xl font-semibold tracking-tight mb-4 " + className}>
        {children}
      </h1>
    );
  }
  return (
    <h2
      className={
        "text-lg font-semibold tracking-tight mt-14 mb-4 " +
        className
      }
    >
      {children}
    </h2>
  );
};

export default Title;
