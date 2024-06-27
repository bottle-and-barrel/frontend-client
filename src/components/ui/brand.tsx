import Image, { ImageProps } from "next/image";

export interface BrandProps extends Omit<ImageProps, "src" | "alt"> {}

export default function Brand(props: BrandProps) {
  return (
    <Image
      width={147}
      height={55.5}
      {...props}
      src="/images/brand/brand.png"
      alt="Bottle & Barrel"
    />
  );
}
