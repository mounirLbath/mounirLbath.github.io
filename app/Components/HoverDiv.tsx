"use client";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  colorCenter?: string;
  colorOutline?: string;
  onClick?: () => void;
}

const HoverDiv = ({
  children = "",
  className = "",
  colorCenter = "rgba(0,0,0,0.09)",
  colorOutline = "white",
  onClick = () => {},
}: Props) => {
  const container = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  // Initialize mouse position based on current mouse position
  useEffect(() => {
    // Function to get the mouse position relative to the container
    const getMousePos = (e: MouseEvent) => {
      if (!container.current) return;

      // Get the mouse position relative to the container
      setMousePos({
        x: e.pageX - container.current.offsetLeft,
        y: e.pageY - container.current.offsetTop,
      });
    };

    // Set the initial mouse position as soon as the component mounts
    document.body.addEventListener("mousemove", getMousePos);

    // Cleanup event listener
    return () => {
      document.body.removeEventListener("mousemove", getMousePos);
    };
  }, []);

  return (
    <div
      className={className}
      ref={container}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        background: hover
          ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${colorCenter} 0%, ${colorOutline} 100%)`
          : "white",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default HoverDiv;
