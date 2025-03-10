import Link from "next/link";
import React from "react";

interface Props {
  href: string;
}

const Button = ({ href }: Props) => {
  return <Link href={href}></Link>;
};

export default Button;
