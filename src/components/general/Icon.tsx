import Image from "next/image";

type IconProps = {
  name: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function Icon({
  name,
  className = "",
  width = 16,
  height = 16,
}: IconProps) {
  return (
    <Image
      src={`/svg/${name}.svg`}
      alt={name}
      className={className}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
    />
  );
}
