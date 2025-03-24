import Link from "next/link";

interface Props {
  href?: string;
  children?: React.ReactNode;
  target?: string;
  className?: string;
}

const LinkButton = ({
  href = "",
  children = "",
  target = "",
  className = "",
}: Props) => {
  return (
    <Link
      className={"text-blue-500 hover:text-blue-900 " + className}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
