"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  sequence: (string | number)[];
  repeat?: number;
}

const TypeText = ({ sequence, repeat = Infinity }: Props) => {
  return (
    <TypeAnimation
      className="text-xl xxsm:text-2xl xsm:text-3xl"
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={repeat}
    />
  );
};

export default TypeText;
