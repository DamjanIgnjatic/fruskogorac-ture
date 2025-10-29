import Image from "next/image";

type BackgroundProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Background = ({ src, alt }: BackgroundProps) => {
  return <Image src={src} alt={alt} className={`object-cover`} fill />;
};
