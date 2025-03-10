"use client";
import React, { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathProps {
  children: string; // The LaTeX expression as a string
  className?: string;
}

const Math: React.FC<MathProps> = ({ children, className = "" }) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      katex.render(children, elementRef.current, {
        throwOnError: false,
      });
    }
  }, [children]);

  return <span className={className} ref={elementRef} />;
};

export default Math;
