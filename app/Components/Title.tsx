import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  level?: 1 | 2;
  id?: string;
}

// level 1: page title, level 2: section heading
const Title = ({ children = "", className = "", level = 2, id }: Props) => {
  if (level === 1) {
    return (
      <h1
        id={id}
        className={
          "text-3xl font-semibold tracking-tight mb-4 scroll-mt-20 " + className
        }
      >
        {children}
      </h1>
    );
  }
  return (
    <h2
      id={id}
      className={
        "text-lg font-semibold tracking-tight mt-14 mb-4 scroll-mt-20 " +
        className
      }
    >
      {children}
    </h2>
  );
};

export default Title;
