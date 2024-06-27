import Image, { ImageProps } from "next/image";

export interface BrandProps extends Omit<ImageProps, "src" | "alt"> {}

export default function Brand(props: BrandProps) {
  return (
    <>
      <Image
        className="hidden md:block"
        width={147}
        height={55.5}
        {...props}
        src="/images/brand/brand.png"
        alt="Bottle & Barrel"
      />
      <Image
        className="block md:hidden"
        width={28.6}
        height={55.5}
        {...props}
        src="/images/brand/logo.png"
        alt="Bottle & Barrel"
      />
    </>
  );
}
