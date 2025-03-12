import Link from "next/link";

interface Props {
  href?: string;
  children?: React.ReactNode;
  target?: string;
}

const LinkButton = ({ href = "", children = "", target = "" }: Props) => {
  return (
    <Link
      className="text-blue-500 hover:text-blue-900"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
