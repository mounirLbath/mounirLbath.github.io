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
      className={"text-link hover:text-link-hover " + className}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
