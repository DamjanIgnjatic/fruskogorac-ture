import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="/images/logo.png"
        alt="furskogorac ture - logo"
        width={178}
        height={30}
      />
    </div>
  );
}
