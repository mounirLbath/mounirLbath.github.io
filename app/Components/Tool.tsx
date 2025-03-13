import Image from "next/image";

interface Props {
  name?: string;
  logoSrc?: string;
  link?: string;
}

const Tool = ({ name = "", logoSrc = "", link = "" }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="h-15 bg-gray-100 border-1 border-gray-300 w-fit p-4 rounded-full flex items-center justify-center gap-3"
    >
      {logoSrc != "" ? (
        <Image
          src={logoSrc}
          alt=""
          layout="intrinsic"
          width={name === "" ? 60 : 30}
          height={0}
        />
      ) : null}
      {name}
    </a>
  );
};

export default Tool;
