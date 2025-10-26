import Image from "next/image";

type BackgroundProps = {
  src: string;
  alt: string;
};

export default function Background({ src, alt }: BackgroundProps) {
  return <Image src={src} alt={alt} fill className="object-cover" />;
}
